import React from "react";
import illustrationintro from "./img/illustration-intro.svg";
import anna from "./img/anna.svg";
import victor from "./img/victor.svg";
import myAvatar from "./img/myAvatar.svg";
import facebook from "./img/icon-facebook.svg";
import youtube from "./img/icon-youtube.svg";
import pinterest from "./img/icon-pinterest.svg";
import twitter from "./img/icon-twitter.svg";
import instagram from "./img/icon-instagram.svg";

export const Hero = () => {
  return (
    <div>
      <section id="hero">
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          <div className="flex flex-col mb-28 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Inspire and encourage to build a better future
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              FitFlix is a platform which makes workouts easier than ever
              before. Make your program and go to work with your friends.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href=""
                className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={illustrationintro} alt="illustrationintro"></img>
          </div>
        </div>
      </section>
      <section id="features">
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              What's different about Manage ?
            </h2>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Sick of paywalls and restrictions by expensive applications?
              FitFlix is free and open source and is in a segment of first
              movers when it comes to making social initiatives within fitness!
            </p>
          </div>

          <div className="flex flex-col space-y-8 md:w-1/2">
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div class="flex items-center space-x-2">
                  <div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    01
                  </div>
                  <h3 class="text-base font-bold md:mb-4 md:hidden">
                    Track company-wide progress
                  </h3>
                </div>
              </div>

              <div>
                <h3 class="hidden mb-4 text-lg font-bold md:block">
                  Track fitness progress
                </h3>
                <p class="text-darkGrayishBlue">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
            </div>

            <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div class="flex items-center space-x-2">
                  <div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    02
                  </div>
                  <h3 class="text-base font-bold md:mb-4 md:hidden">
                    Advanced fitness programs
                  </h3>
                </div>
              </div>

              <div>
                <h3 class="hidden mb-4 text-lg font-bold md:block">
                  Advanced fitness programs
                </h3>
                <p class="text-darkGrayishBlue">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
            </div>

            <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div class="flex items-center space-x-2">
                  <div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    03
                  </div>
                  <h3 class="text-base font-bold md:mb-4 md:hidden">
                    Advanced fitness programs
                  </h3>
                </div>
              </div>

              <div>
                <h3 class="hidden mb-4 text-lg font-bold md:block">
                  Advanced fitness programs
                </h3>
                <p class="text-darkGrayishBlue">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
            </div>
          </div>
        </div>
        <section id="testimonials">
          <div class="max-w-6xl px-5 mx-auto mt-32 text-center">
            <h2 class="text-4xl font-bold text-center">
              You Asked, We Delivered
            </h2>
            <p class=" text-darkGrayishBlue mt-4">
              This is what our interviewees said about there needs and wants.
            </p>
            <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
              <div class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                <img src={myAvatar} class="w-16 -mt-14" alt="" />
                <h5 class="text-lg font-bold">Anisha Li</h5>
                <p class="text-sm text-darkGrayishBlue">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
              <div class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                <img src={anna} class="w-16 -mt-14" alt="" />
                <h5 class="text-lg font-bold">Ali Bravo</h5>
                <p class="text-sm text-darkGrayishBlue">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
              <div class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                <img src={victor} class="w-16 -mt-14" alt="" />
                <h5 class="text-lg font-bold">Richard Watts</h5>
                <p class="text-sm text-darkGrayishBlue">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
            </div>
            <div class="my-16">
              <a
                href="#"
                class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
      </section>
      <footer class="bg-veryDarkBlue">
        <div class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          <div class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div class="mx-auto my-6 text-center text-white md:hidden"></div>
            <div>
              <img src="img/logo-white.svg" class="h-8" alt="" />
            </div>
            <div class="flex justify-center space-x-4">
              <a href="#">
                <img src={facebook} alt="" class="h-8" />
              </a>
              <a href="#">
                <img src={youtube} alt="" class="h-8" />
              </a>
              <a href="#">
                <img src={twitter} alt="" class="h-8" />
              </a>
              <a href="#">
                <img src={pinterest} alt="" class="h-8" />
              </a>
              <a href="#">
                <img src={instagram} alt="" class="h-8" />
              </a>
            </div>
          </div>
          <div class="flex justify-around space-x-32">
            <div class="flex flex-col space-y-3 text-white">
              <a href="#" class="hover:text-brightRed">
                Home
              </a>
              <a href="#" class="hover:text-brightRed">
                Pricing
              </a>
              <a href="#" class="hover:text-brightRed">
                Products
              </a>
              <a href="#" class="hover:text-brightRed">
                About
              </a>
            </div>
            <div class="flex flex-col space-y-3 text-white">
              <a href="#" class="hover:text-brightRed">
                Careers
              </a>
              <a href="#" class="hover:text-brightRed">
                Community
              </a>
              <a href="#" class="hover:text-brightRed">
                Privacy Policy
              </a>
            </div>
          </div>

          <div class="flex flex-col justify-between"></div>
        </div>
      </footer>
    </div>
  );
};
