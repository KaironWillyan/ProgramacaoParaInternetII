import './App.css'
import Section from './pages/home/components/section'
import Heading from './pages/home/components/heading'
// import { useState } from 'react'

function App() {
  return (
    <Section isFancy={false}>
      <Heading>My Profile</Heading>
      <Post
        title="Hello traveller!"
        body="Read about my adventures"
        />
      <AllPosts />
    </Section>
  )
}

function AllPosts(){
  return (
    <Section isFancy={false}>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  )
}

function RecentPosts(){
  return (
    <Section isFancy={false}>
      <Heading>Recent Posts</Heading>
      <Post
        title="Flavors of Lisbon"
        body="...those pastéis de nata!"
      />
      <Post
        title="Buenos Aires in the rhythm of tango"
        body="I loved it!"
      />
    </Section>
  )
}

interface PostProps {
  title: string;
  body: string
}

function Post({ title, body }: PostProps) {
  return (
    <Section isFancy={true}>
      <Heading>
        {title}
      </Heading>
      <p><i>{body}</i></p>
    </Section>
  );
}
export default App
