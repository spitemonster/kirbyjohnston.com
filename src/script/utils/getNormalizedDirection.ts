export function getNormalizedDirection(
    vecFrom: { X: number; Y: number },
    vecTo: { X: number; Y: number }
) {
    const directionX = vecTo.X - vecFrom.X
    const directionY = vecTo.Y - vecFrom.Y
    const maxDistance = 500

    const distance = Math.sqrt(directionX ** 2 + directionY ** 2)
    const clampedDistance = Math.min(distance, maxDistance)
    const normalizedDistance = clampedDistance / maxDistance

    const normalizedDirection = {
        x: (directionX / distance) * normalizedDistance,
        y: (directionY / distance) * normalizedDistance,
        distance: normalizedDistance,
    }

    return normalizedDirection
}
