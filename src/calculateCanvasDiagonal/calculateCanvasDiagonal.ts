export default function calculateCanvasSize(
  length: string,
  width: string
) {
  return Math.sqrt(parseFloat(length) ** 2 + parseFloat(width) ** 2);
}


