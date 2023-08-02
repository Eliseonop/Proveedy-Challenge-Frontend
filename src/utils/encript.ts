export function hashText (text: string): string {
  // Primero, convierte los caracteres en números utilizando el código ASCII
  const charCodes = text.split('').map(char => char.charCodeAt(0))

  // Luego, invierte los números
  const reversedNumbers = charCodes.map(code => 255 - code)

  // Transforma los números en letras
  const hashedText = reversedNumbers
    .map(num => String.fromCharCode(num))
    .join('')

  return hashedText
}

export function unhashText (hashedText: string): string {
  // Convierte las letras en números nuevamente
  const charCodes = hashedText.split('').map(char => char.charCodeAt(0))

  // Invierte los números nuevamente para obtener el texto original
  const originalNumbers = charCodes.map(code => 255 - code)

  // Transforma los números en letras
  const originalText = originalNumbers
    .map(num => String.fromCharCode(num))
    .join('')

  return originalText
}
