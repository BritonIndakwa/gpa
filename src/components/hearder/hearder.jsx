import React, { useEffect, useState } from "react";
import './header.css';
import { paragraph } from "../../Assets/assets";

const Header = () => {
    const [displayText, setDisplayText] = useState('');
    const [hintIndex, setHintIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [currentHints, setCurrentHints] = useState([]);


    // 1. Extract product names grouped by category
    useEffect(() => {
        if (Array.isArray(paragraph)) {
            const grouped = {};

            paragraph.forEach((p) => {
                if (!grouped[p.category]) {
                    grouped[p.category] = [];
                }
                grouped[p.category].push(p.details || p.title);
            });

            // Flatten all names grouped by category (change logic if you want only "Womens", etc.)
            const allHints = Object.values(grouped).flat();
            setCurrentHints(allHints);
        }
    }, [paragraph]);

    // 2. Typing effect
    useEffect(() => {
        if (currentHints.length === 0) return;

        const fullText = ` ${currentHints[hintIndex]}`;
        if (charIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + fullText[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 100); // typing speed
            return () => clearTimeout(timeout);
        } else {
            // Wait before switching to next
            const pause = setTimeout(() => {
                setCharIndex(0);
                setDisplayText('');
                setHintIndex((prev) => (prev + 1) % currentHints.length);
            }, 2000); // pause time after full sentence
            return () => clearTimeout(pause);
        }
    }, [charIndex, hintIndex, currentHints]);

    return (
        <div className="header">
            <div className="header-content">
                <h3>
                    {displayText}
                </h3>
            </div>
        </div>
    )
}
export default Header;