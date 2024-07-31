import HomeFilters from "@/components/home/HomeFilters";
import QuestionCard from "@/components/cards/QuestionCard";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/Filters";
import Link from "next/link";
import React from "react";

const questions = [
  {
    _id: "1",
    title: "How to create a new project in Next js?",
    tags: [
      { _id: "1", name: "frontend" },
      { _id: "2", name: "nextjs" },
    ],
    author: [{ _id: "1", name: "Echiiro Oda", picture: "url-to-picture-1" }],
    upvotes: 1100,
    views: 125000,
    answers: [],
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "How to center a div?",
    tags: [
      { _id: "1", name: "css" },
      { _id: "2", name: "flexbox" },
      { _id: "3", name: "grid" },
    ],
    author: [
      { _id: "2", name: "Programming with Mosh", picture: "url-to-picture-2" },
    ],
    upvotes: 2700,
    views: 3510,
    answers: [],
    createdAt: new Date("2024-07-29T10:00:00.000Z"),
  },
  {
    _id: "3",
    title: "What is the difference between let and var in JavaScript?",
    tags: [
      { _id: "1", name: "javascript" },
      { _id: "2", name: "es6" },
    ],
    author: [{ _id: "3", name: "Kyle Simpson", picture: "url-to-picture-3" }],
    upvotes: 45,
    views: 529,
    answers: [],
    createdAt: new Date("2023-03-15T09:00:00.000Z"),
  },
  {
    _id: "4",
    title: "How to use async/await in JavaScript?",
    tags: [
      { _id: "1", name: "javascript" },
      { _id: "2", name: "async-await" },
    ],
    author: [{ _id: "4", name: "Brad Traversy", picture: "url-to-picture-4" }],
    upvotes: 30,
    views: 402,
    answers: [],
    createdAt: new Date("2023-11-20T15:30:00.000Z"),
  },
  {
    _id: "5",
    title: "How to manage state in React using Redux?",
    tags: [
      { _id: "1", name: "react" },
      { _id: "2", name: "redux" },
    ],
    author: [{ _id: "5", name: "Dan Abramov", picture: "url-to-picture-5" }],
    upvotes: 65,
    views: 784,
    answers: [],
    createdAt: new Date("2022-06-05T14:45:00.000Z"),
  },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:grow sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900 ">All Questions</h1>
        <Link href={`/ask-question`} className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] rounded-xl px-4 py-3 !text-light-900 ">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6  ">
        {questions.length > 0 ? (
          questions.map((question) => {
            return (
              <QuestionCard
                key={question._id}
                _id={question._id}
                title={question.title}
                tags={question.tags}
                author={question.author}
                upvotes={question.upvotes}
                views={question.views}
                answers={question.answers}
                createdAt={question.createdAt}
              />
            );
          })
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question & kickstart
        the discussion. 💡 Get Involved Now!!!"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
