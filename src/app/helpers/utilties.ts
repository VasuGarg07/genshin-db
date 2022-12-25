import { AssetFolders, RarityColor, VisionColor } from './enums';

export namespace Utils {
  export const randomString = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  export const numId = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  export function csvToArray(str: string, delimiter = ',') {
    const headers = str.slice(0, str.indexOf('\n')).split(delimiter);
    const rows = str.slice(str.indexOf('\n') + 1).split('\n');
    const arr = rows.map(function (row) {
      const values = row.split(delimiter);
      const el = headers.reduce(function (object: any, header, index) {
        object[header] = values[index];
        return object;
      }, {});
      return el;
    });
    return arr;
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
