interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface CheckmarkSVGData {
  size: number;
  firstLine: Line;
  scndLine: Line;
}

export const checkmarkSVGData = (
  checkboxSize: 'small' | 'medium' | 'large'
): CheckmarkSVGData => ({
  size: checkboxSize === 'small' ? 20 : checkboxSize === 'large' ? 36 : 28,
  firstLine: {
    x1: checkboxSize === 'small' ? 4 : checkboxSize === 'large' ? 7 : 6,
    y1: checkboxSize === 'small' ? 12 : checkboxSize === 'large' ? 20 : 18,
    x2: checkboxSize === 'small' ? 8 : checkboxSize === 'large' ? 13 : 10,
    y2: checkboxSize === 'small' ? 16 : checkboxSize === 'large' ? 29 : 23
  },
  scndLine: {
    x1: checkboxSize === 'small' ? 8 : checkboxSize === 'large' ? 13 : 10,
    y1: checkboxSize === 'small' ? 16 : checkboxSize === 'large' ? 29 : 23,
    x2: checkboxSize === 'small' ? 16 : checkboxSize === 'large' ? 29 : 23,
    y2: checkboxSize === 'small' ? 4 : checkboxSize === 'large' ? 7 : 6
  }
});
