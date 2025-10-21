// Best practice: Smooth scrolling with offset for fixed navbar
export const scrollToSection = (sectionId: string, offset: number = 80) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Navigation items configuration
export const navigationItems = [
  { name: 'Strona główna', id: 'hero' },
  { name: 'Usługi', id: 'services' },
  { name: 'W czym pomagamy', id: 'conditions' },
  { name: 'Pierwsza wizyta', id: 'first-visit' },
  { name: 'Przed wizytą', id: 'pre-visit-info' },
  { name: 'Cennik', id: 'pricing' },
  { name: 'Umów się', id: 'booking' },
  { name: 'FAQ', id: 'faq' },
  { name: 'Kontakt', id: 'contact' },
] as const;