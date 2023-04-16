<script>
import HeroLayout from '../components/HeroLayout.vue';

export default {
  components: {
    HeroLayout
  }
};
</script>

<template>
  <HeroLayout>
    <template v-slot:left-content>
      <div>
        <p class="p-16 text-3xl">
          Custom Metal Creations produces creative and unique scultpures, homegoods, gifts, and yard
          art primarily utilizing metal as a medium.
        </p>
      </div>
    </template>
    <template v-slot:right-content>
      <img
        class="max-w-[50%] rounded-md"
        src="../assets/aboutsection.jpeg"
        alt="artist Terry Lawrenz welding"
      />
    </template>
  </HeroLayout>
  <HeroLayout>
    <template v-slot:left-content>
      <div class="flex justify-center">
        <img
          class="max-w-[50%] rounded-md"
          src="../assets/terry-l.jpg"
          alt="artist terry lawrenz, posing with large metal sculpture"
        />
      </div>
    </template>
    <template v-slot:right-content>
      <p class="p-16 text-3xl">
        The artist behind Custom Metal Creations is Terry Lawrenz. Terry has been welding for over
        30 years. He has experience in commercial welding but enjoys being creative with his craft.
        Terry lives in Colorado.
      </p>
    </template>
  </HeroLayout>
  <hr class="mx-16 my-16"/>
  <div class="flex flex-col items-center justify-center pt-8 px-16 pb-16">
    <h3 class="text-3xl">Check out Terry in the Central Oregonian News!</h3>
    <figure class="mt-8">
      <img
        class="mx-auto"
        src="../assets/news.jpeg"
        alt="newspaper clipping about Terry in the Central Oregonian newspaper. Please see fig caption for article."
      />
      <figcaption class="bg-light-red rounded-md mt-16">
        <article>
          <h4 class="p-4">Above Article:</h4>
          <p class="p-4">
            Central Oregonian - Ron Halvorson  www.centraloregonian.com 
          </p>
          <p class="p-4">
            November 26, 2013
          </p>
          <p class="p-4">
            Converting scrap metal into a work of art Prineville resident Terry Lawrenz has
            welded a variety of artistic creations. Some might say there are two kinds of
            welders-those who weld for a living, and those who weld as a lifestyle. Terry Lawrenz is
            definitely one of the latter. Just look at his yard. Along with a bevy of cus tom.
            hand-crafted wind chimes, there is a menagerie of colorful metal birds, fanci ful
            animals, flowers, and other creations that defy description. Lawrenz has been busy.
            Indeed. "If I go a week without welding. I go stir crazy" he admitted. "I'm good at it.
            Very good at it. That's why I guess I like it so much."
          </p>
          <p class="p-4">
            Lawrenz, 52, said he first took up welding three decades ago, when he attend- ed the
            prestigious Hobart Institute of Welding Technology, in Troy, Ohio. When a 12-year stint
            as an aerospace welder in Colorado ended about three years ago, he followed his wife,
            Kristie, to her new job as manager of the City Center Motel. He soon landed a job as
            welder at a local mill but was laid off three months ago. "This is the longest I've been
            without work," heever said. His unemployment, though, has s allowed him to concen- trate
            on his metal arta passion that began 15 years ago when there was at his regular down
            time at his aerospace job. "My boss came in there one day, and said, "Why don't you
            ware, tools, saw blades, rail- road spikes, pitchforks, bicy cle parts, balance wheels,
            chain, hooks, springs, and moulding knives not to mention horseshoes all are fodder for
            innumerable creations materials, he said.
          </p>
          <p class="p-4">
            Friends give him old metal, he finds and he spends a lot of time on parts at the Habitat
            ReStore. wind chimes for horseshoes. Craigslist. He's even traded It's even better if
            the metal is rusty. "I like the older stuff. I've discovered, since I've been here, that
            the old, rusty stuff sells a lot better than the newer." Actually getting money for
            Lawrenz his art art is something new to here," he said. "In fact, most of the stuff I've
            sold, she's (Kristie) priced, because I got "I've never sold it till I got to where I
            was giving it to people. I just like doing it. I was thinking, if I start selling this.
            it's going to feel like a job, and I'm not going to really get into it. But it hasn't
            been like that." Sales have ave mostly been word-of-mouth, he said. Sometimes he starts
            and finishes a sculpture with a definite goal in mind. "He sees something, and it's.
            'Hey. Doesn't this look a -you know," said Kristie. "Then he starts building on that."
            At other times, not so. This was going to be a plant stand," he said, stand- ing next to
            a dinosaur-like sculpture that's still a work in progress. “I got it together. I didn't
            like it, and what was I thinking? It was in the evening and I went outside after supper.
            I just started tacking stuff on here. Then I really got into it. The same thing happened
            when he was working on an item for a recent benefit auction. “I was trying to get a
            bunch of stuff don't for that auction and I welded some thing together out there and it
            didn't turn out how I wanted it. I started welding stuff on it and then the manager saw
            it and said “Ow Wow! I'll take that. So we put it in her yard.” For the time being.
          </p>
          <p class="p-4">
            Lawrenz does his work just outside his back door, but since he and Kristie actually live
            in an apartment at the motel, there are some restrictions. "I've got a curfew," he said.
            "I can't grind after a certain time." He said he still gives stuff away but if he's not
            careful.There can be conflict over items with his wife, especially if the gift involves
            her closely-guarded metal dragonfly, made of butter knives. "What would get me." she
            said. "is he'd make me somme thing, and then a couple of days later I'd look, and it's
            gone. He's either given t to somebody, or sold it." "I figure, well. I'll make you
            another one." he said, trying to smooth things over. He'd like to be able to make a
            living doing this, but he needs to get back to a regular job soon. In the meantime, he
            said he welcomes ideas from people for special projects, such as a custom banana rack he
            made for Pickle's Produce. he's (owner of Pickle's) just "At first I I thought, 'Well,
            joking round. I never heard of a banana rack. "I'm proud of him," boasted Kristie.
            "Sometimes he says 'I don't think anybody wants this stuff.' But he does good, and I'm
            proud of him."
          </p>
        </article>
      </figcaption>
    </figure>
  </div>
</template>
