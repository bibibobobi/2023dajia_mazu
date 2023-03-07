declare module '@readr-media/share-button' {
  export const ShareButton: React.FC<{
    pathColor: string;
    direction: 'horizontal' | 'vertical';
    className?: string;
    onClick?: () => void;
    LineClick?: () => void;
    FbClick?: () => void;
    LinkClick?: () => void;
  }>;
}
