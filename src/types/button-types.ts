export interface ButtonModel {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?:boolean
}
