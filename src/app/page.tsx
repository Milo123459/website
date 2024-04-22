import Title from "@/components/title";
import Description from "@/components/description";
import Container from "@/components/container";
import Card from "@/components/card";
import Spacer from "@/components/spacer";

export default function Home() {
  return (
    <>
      <Title>milo</Title>
      <Description>
        hello! i&apos;m milo, and this is my personal website. here you can
        learn about me, my projects, and anything i want to write about on my
        blog
      </Description>
      <Spacer />
      <Title>skills</Title>
      <Container>
        <Card
          title="rust"
          description="i have been using rust for a few years now, and i love it! it is my favorite programming language"
          link="https://rust-lang.org"
        />
        <Card
          title="typescript/javascript"
          description="i am fluent in both languages, and have been using both for around 4 years"
          link="https://typescriptlang.org"
        />
        <Card
          title="railway"
          description="i ❤️ railway"
          link="https://railway.app?referralCode=milo"
        />
        <Card
          title="next"
          description="this website is built with next, which i enjoy using"
          link="https://nextjs.org"
        />
        <Card
          title="many more..."
          description="i have experience with many other languages and tools, but these are my favorites and deserve to be put on the homepage"
        />
      </Container>
      <Title>projects</Title>
      <Container>
        <Card
          title="sushibot"
          description="an interactive discord bot about making sushi!"
          link="/sushibot"
        />
      </Container>
    </>
  );
}
