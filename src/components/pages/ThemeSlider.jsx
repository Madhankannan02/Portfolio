
const ThemeSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);
    const isDragging = useRef(false);

    const handleMove = (clientX) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
            const percentage = (x / rect.width) * 100;
            setSliderPosition(percentage);
        }
    };

    const onMouseDown = () => { isDragging.current = true; };
    const onMouseUp = () => { isDragging.current = false; };
    const onMouseMove = (e) => { if (isDragging.current) handleMove(e.clientX); };

    // Touch events for mobile support
    const onTouchMove = (e) => { handleMove(e.touches[0].clientX); };

    return (
        <div
            ref={containerRef}
            className="relative w-full overflow-hidden cursor-col-resize select-none"
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
            onClick={(e) => handleMove(e.clientX)} // Allow click to jump
        >
            {/* Dark Theme (Base) */}
            <img
                src={LandingPageDark}
                alt="Dark Mode"
                className="w-full h-auto block select-none pointer-events-none"
            />

            {/* Light Theme (Overlay) - Clipped */}
            <div
                className="absolute inset-0 pointer-events-none overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={LandingPageLight}
                    alt="Light Mode"
                    className="w-full h-auto max-w-none select-none"
                />
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-black">
                    <div className="flex gap-[2px]">
                        <div className="w-[2px] h-3 bg-black/20 rounded-full"></div>
                        <div className="w-[2px] h-3 bg-black/20 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Labels (Optional) */}
            <div className="absolute top-8 left-8 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Dark
            </div>
            <div className="absolute top-8 right-8 bg-white/50 backdrop-blur-md text-black px-3 py-1 rounded-full text-xs font-medium border border-black/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Light
            </div>
        </div>
    );
};
