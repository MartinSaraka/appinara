/**
 * Balík, na ktorý návštevník klikol v sekcii Balíky.
 * Kontaktný formulár si ho prečíta a predvyplní typ projektu aj úvod správy,
 * aby človek nemusel písať to, čo nám už klikom povedal.
 */
export interface SelectedPackage {
  name: string
  category: string
  projectType: string
  priceLine: string
}

export const useSelectedPackage = () =>
  useState<SelectedPackage | null>('selected-package', () => null)
