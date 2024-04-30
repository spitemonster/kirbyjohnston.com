const opinions = [
    'Test opinion 1',
    'Test opinion 2',
    'Test opinion 3',
    'Test opinion 4',
]

export async function GET() {
    return new Response(JSON.stringify(opinions))
}
