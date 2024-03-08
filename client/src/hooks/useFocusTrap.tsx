import { useEffect, useRef } from "react";

export const useFocusTrap = (isEnabled: boolean, closeModal: () => void) => {
  const divRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const trapElement = divRef.current;
    if (!isEnabled || !trapElement) return;

    const focusableElements = trapElement.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        if (event.shiftKey && document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      } else if (event.key === "Escape") {
        closeModal();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const modalButton = buttonRef.current;

      if (
        trapElement &&
        !trapElement.contains(target) &&
        !(modalButton && modalButton.contains(target))
      ) {
        closeModal();
      }
    };

    trapElement.addEventListener("keydown", handleTabKey);
    document.addEventListener("click", handleClickOutside);

    if (!trapElement.contains(document.activeElement)) {
      firstElement.focus();
    }

    return () => {
      trapElement.removeEventListener("keydown", handleTabKey);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isEnabled, closeModal]);

  return [divRef, buttonRef] as const;
};
