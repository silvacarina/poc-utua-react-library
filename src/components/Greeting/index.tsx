type GreetingProps = {
  greeting?: string
}

export default function Greeting({ greeting = "World" }: GreetingProps) {
  return (
    <div>Hello, {greeting}!</div>
  )
}