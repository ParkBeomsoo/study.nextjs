'use client'
import {useState} from "react";

export default function Page(){
    const [backgroundColor, setBackgroundColor] = useState('blue');

    const handleColorChange = () => {
        // 랜덤한 배경색을 생성하기 위한 함수
        const getRandomColor = () => {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        };

        // 새로운 랜덤한 배경색으로 설정
        const newColor = getRandomColor();
        setBackgroundColor(newColor);
    };

    return (
        <>
            <div className="w-1/2">
                <button className="w-full" onClick={handleColorChange}>change button</button>
                <div className="w-full h-full">
                    <div style={{
                        backgroundColor: backgroundColor,
                        padding: '20px',
                        textAlign: 'center',
                        cursor: 'pointer',
                    }} className="w-full h-96">team page
                    </div>
                </div>
            </div>
        </>
    )
}