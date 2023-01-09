import { AssetFolders, RarityColor, VisionColor } from './enums';

export namespace Utils {
  export function returnArray(data: any | any[]): any[] {
    return Array.isArray(data) ? data : [data];
  }

  export function randomColor() {
    let color;
    do {
      color = Math.floor(Math.random() * 16777215).toString(16);
    } while (color.length < 6);

    let red = parseInt(color.substring(0, 2), 16);
    let green = parseInt(color.substring(2, 4), 16);
    let blue = parseInt(color.substring(4, 6), 16);
    let brightness = red * 0.299 + green * 0.587 + blue * 0.114;

    if (brightness > 160) {
      return { backgroundColor: '#' + color, color: '#000' };
    } else
      return {
        backgroundColor: '#' + color,
        color: '#fff',
      };
  }

  export const uniqueArray = (array: any[]) => {
    return [...new Set(array)];
  };

  export const elementColor = (el: string): VisionColor => {
    return <VisionColor>VisionColor[el as keyof typeof VisionColor];
  };

  export const rarityColor = (el: string): RarityColor => {
    return <RarityColor>RarityColor[el as keyof typeof RarityColor];
  };

  export const visionIcon = (file: string) => {
    return `/assets/${AssetFolders.VISION}/${file.toLocaleLowerCase()}.svg`;
  };

  export const langIcon = (file: string) => {
    return `/assets/${AssetFolders.LANG}/${file.toLocaleLowerCase()}.svg`;
  };

  export const rarityBg = (file: string) => {
    return `/assets/${AssetFolders.RAREBG}/${file.toLocaleLowerCase()}.png`;
  };

  export const starIcon = (file: string) => {
    return `/assets/${AssetFolders.STAR}/${file.toLocaleLowerCase()}.png`;
  };

  export const weaponIcon = (file: string) => {
    return `/assets/${AssetFolders.WEAPON}/${file.toLocaleLowerCase()}.png`;
  };
}
