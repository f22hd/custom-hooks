import { useEffect } from 'react'

export const useInfinitScroll = (selector: string, keepObserving: boolean = false, callback: Function) => {
    useEffect(() => {
        const target: Element = document.querySelector(selector) as Element;
        const options = {
            threshold: .5
        }
        const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach((entry: IntersectionObserverEntry) => {
                if (!entry.isIntersecting) return false;

                if (!keepObserving) {
                    observer.unobserve(target);
                }
                return callback();
            });
        }

        if (target) {
            const observer = new IntersectionObserver(handleIntersection, options);
            observer.observe(target);
        }
    });
}
