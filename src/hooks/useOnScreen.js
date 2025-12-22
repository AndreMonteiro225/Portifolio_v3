import { useState, useEffect } from 'react';

export default function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    // Captura o valor atual da ref para garantir a limpeza correta no return
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Apenas ativa se estiver interceptando
        if (entry.isIntersecting) {
          setIntersecting(true);
          // Opcional: Desconecta o observer para que a animação rode apenas uma vez e não resete
          observer.disconnect(); 
        }
      },
      {
        threshold: 0.1, // Alternativa: dispara quando 10% do elemento estiver visível
        rootMargin: '-100px', // Dispara quando o elemento avançar 100px para dentro da tela
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}