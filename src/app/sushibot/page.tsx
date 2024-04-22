import Title from "@/components/title";
import Description from "@/components/description";
import Container from "@/components/container";
import Card from "@/components/card";
import Spacer from "@/components/spacer";

export default function Home() {
  return (
    <>
      <Title>sushibot</Title>
      <Description>
        sushibot is an advanced, feature-rich discord bot about making sushi. it
        allows you to run a sushi restaurant, make sushi, and serve customers.
      </Description>
      <Spacer />
      <Title>stack</Title>
      <Container>
        <Card
          title="rust"
          description="written in the rust programming language"
          link="https://rust-lang.org"
        />
        <Card
          title="serenity"
          description="sushibot uses serenity, a rust library for the discord api"
          link="https://github.com/serenity-rs/serenity"
        />
        <Card
          title="railway"
          description="deployed on railway!"
          link="https://railway.app?referralCode=milo"
        />
      </Container>
      <Title>future plans</Title>
      <Description>
        i don&apos;t think i ever finished sushibot, and think it is an idea
        that can be iterated on and continuously improved upon. the last major
        update was in feburary, 2024, which consisted of an internal rewrite and
        some minor new features. regardless, i believe many new exciting
        features can be added!
      </Description>
      <Spacer />
      <Title>links</Title>
      <Container>
        <Card
          title="invite the bot"
          description="you know you want to"
          link="https://discord.com/oauth2/authorize?client_id=850045648639098901&permissions=139586750528&scope=bot%20applications.commands"
        />
        <Card
          title="support server"
          description="if the bot gets too hard :("
          link="https://discord.gg/WmxZRazTEk"
        />
      </Container>
    </>
  );
}
