const LoadingBubble = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            margin: '8px 0',
        }}>
            <div style={{
                background: '#e0e0e0',
                color: '#333',
                borderRadius: '16px',
                padding: '10px 18px',
                maxWidth: '75%',
                minWidth: '48px',
                display: 'inline-block',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}>
                <span className="loading-dots">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                </span>
                <style>{`
                    .loading-dots {
                        display: flex;
                        gap: 4px;
                        align-items: center;
                        height: 16px;
                    }
                    .dot {
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background: #aaa;
                        opacity: 0.6;
                        animation: loading-bounce 1.2s infinite both;
                    }
                    .dot:nth-child(2) {
                        animation-delay: 0.2s;
                    }
                    .dot:nth-child(3) {
                        animation-delay: 0.4s;
                    }
                    @keyframes loading-bounce {
                        0%, 80%, 100% {
                            transform: scale(0.7);
                            opacity: 0.6;
                        }
                        40% {
                            transform: scale(1.2);
                            opacity: 1;
                        }
                    }
                `}</style>
            </div>
        </div>
    )
}

export default LoadingBubble