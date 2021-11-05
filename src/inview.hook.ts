import { useEffect, useState } from 'react'

export const useInView = (element: string) => {
    const [isInview, setIsInview] = useState<boolean>(false);
    useEffect(() => {
        const target: Element = document.querySelector(element) as Element;
        const options = {
            rootMargin: '0px',
            threshold: 1
        }
        const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach((entry: IntersectionObserverEntry) => {
                if (entry.isIntersecting) {
                    console.log('visible');
                    setIsInview(true);
                    observer.unobserve(target)
                }
            });
        }

        if (element) {
            const observer = new IntersectionObserver(handleIntersection, options);
            observer.observe(target);
        }
    }, [element]);

    return { isInview } as const;
}
