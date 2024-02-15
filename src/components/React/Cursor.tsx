import { useRef } from 'preact/hooks';
import '../../styles/cursor.css';

const useAnimationFrame = (callback: (deltaTime: number) => void) => {
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, []);
};

const Cursor = () => {
  const CursorRef = useRef<HTMLDivElement>(null);
  const CursorDotRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((deltaTime) => {
    if (!CursorRef.current || !CursorDotRef.current) return;

    const handleMouseMove = (evt: MouseEvent) => {
      const x = evt.clientX - CursorRef.current.offsetWidth / 2;
      const y = evt.clientY - CursorRef.current.offsetHeight / 2;
      const xDot = evt.clientX - CursorDotRef.current.offsetWidth / 2;
      const yDot = evt.clientY - CursorDotRef.current.offsetHeight / 2;

      CursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      CursorDotRef.current.style.transform = `translate3d(${xDot}px, ${yDot}px, 0)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  });

  return (
    <div className="Cursor-Main hidden lg:block">
      <div id="cursor" className="grid place-items-center" ref={CursorRef}>
        <div id="cursorView" className="flex_center">View</div>
      </div>
      <div id="cursorDot" ref={CursorDotRef}></div>
    </div>
  );
};

export default Cursor;
