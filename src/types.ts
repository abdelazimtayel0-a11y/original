export const LOGO_URL = "https://i.pinimg.com/736x/d9/85/a6/d985a641fe9cb921a33694038b54faa2.jpg";

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface MaintenanceStep {
  step: string;
  title: string;
  description: string;
}
