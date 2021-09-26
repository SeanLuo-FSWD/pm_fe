import React from "react";
import styles from "./Text.module.scss";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
function Text() {
  return (
    <div className={`${styles.textModule}`}>
      <p>Preface:</p>
      <p>
        <br />
      </p>
      <p>
        You are about to read a manifesto to fix the increasing wealth gap in
        the West. This is not an ideological or argumentative piece, but a
        step-by-step explanation based on logical reasoning and even some simple
        math. This is done in the hope that we can have common ground and take
        meaningful action together. Due to the scale of the topic, even the
        simplest logical deduction requires that few common understandings be
        laid out first, making this a 10 000 words piece, or an one hour long
        audio. So please make yourself comfortable when reading or listening to
        this.&nbsp;
      </p>
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>
      <Element name="sec1" className="element">
        <p>
          <b>Section 1, Introduction:</b>
        </p>
        <p>
          <br />
        </p>
        <p>
          I'd like to start by telling a tale of two nations. A few hundred
          years ago, China was the wealthiest country on earth, with an economy
          accounting for a quarter of the world’s GDP. But behind its wealthy
          facade hides a dark secret: 90% of the Chinese are illiterate
          peasants. The ruling 10% elite have made sure that no peasants are
          able to read or write, by making the Chinese writing too difficult and
          time consuming to learn. Unlike English, or any Romanized language,
          Chinese characters have no connections between how it is written, and
          how it is read. To become literate, one must memorize the writing and
          then the pronunciations of hundreds of characters with no discernible
          pattern. The purpose of the elite was to keep the peasant mass
          uneducated, uninformed, and unable to rise against them.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          Neighbouring China was Japan, who had also adopted the Chinese
          characters, and whose economy at the time paled in comparison. The
          Japanese found the Chinese characters too complicated for widespread
          adoption. Eventually, they used strokes from the Chinese characters to
          create their own alphabet for writing and pronunciation. Now the
          Japanese would know how to write a word, if he knows how to speak it,
          like in English. This seemly trivial improvement was to have huge
          repercussion later.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          When the industrialization came from the West in the 1850s, China was
          still that country with a 90% mass of illiterate peasants, while the
          Japanese have literacy rate of about 50%, comparable to the European
          states. Even more impressively, the Japanese quickly boosted up their
          literacy rate to 90% as part of its industrialization effort. China,
          whose writing system is too complicated for widespread adoption, was
          never able to modernize and was left in the dust.
        </p>
        <p>
          <br />
        </p>
        <p>
          In those days, a common question amongst the Chinese scholar was to
          understand how did their country fallen so behind so suddenly? They
          conclude that their country must have been in decline for a while but
          couldn’t agree on the cause or symptoms. The problem was there was no
          sign of decline if we exclusively measure the GDP level, as China had
          been the world's leading economy until then.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          For me, the decline happened centuries ago, when the elite 10% decided
          to hold onto power at the expense of the rest. They have created a
          wealth gap between them and the population, and to maintain that
          wealth gap, they have engineered a knowledge gap by making everyone
          illiterate. As such, there were little possibilities for innovation,
          and when it comes time to industrialize, China simply do not have
          enough literate people to kickstart the whole process.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          When we describe modern America’s decline, we often cite the Roman
          empire’s collapse, which occurred relatively quickly. But I would say
          that we are more comparable to that of the Chinese empire, a slow and
          imperceivable death. The gap between the rich and poor is widening,
          not just the wealth gap, but a knowledge gap as well. But we don’t see
          it, and we keep praising our rising GDP and stocks. Sadly, it is
          always the same mechanism that makes and breaks empires, whether China
          or Rome. Nations adhere to the principles that made them rich, but
          these very same principle will also undo them. I so wish that we can
          learn from history, so at least America can transcend and break this
          cycle.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          Since the COVID pandemic, many people realized the seriousness of the
          increasing wealth gap. But no one seems to have a real solution for
          this. People tend to focus on fixing the symptoms of this issue, such
          as rising crime rates, homelessness, or housing prices, but not the
          issue itself. For those who try to tackle wealth inequality directly,
          their solutions are often aimed to even out wealth distribution
          through policies that help the poor. This is also a non-solution, as
          it doesn’t correct the mechanism within capitalism that always leads
          back to the same problem.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          I wrote this manifesto because I am of firm belief to have found the
          missing piece to end the wealth gap, and I am myself working towards
          this goal. It offers a unique and comprehensive take on how to fix the
          issue, from the standpoint of a socially conscientious person with one
          foot in the tech industry.
        </p>
      </Element>
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>
      <Element name="sec2" className="element">
        <p>
          <b>Section 2, The cause of the problem:</b>
        </p>
        <p>
          <br />
        </p>
        <p>
          As a web developer, I spent many hours chasing bugs and fixing broken
          programs, and developed an appreciation of all the pieces it takes to
          make a simple website running. In the computer world, either you get
          it, or you don't. The machine does not care about how much you pray,
          how popular or confident you are; if you make a mistake, you get
          slapped with a bug all the same. At the cost of being constantly
          humbled, I gradually learned to consider a problem from of all its
          angles and depth.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          Unfortunately, this mindset seems to be lacking when it comes to
          tackling the real-life issue of wealth inequality. The proposed
          solutions do not take into consideration the comprehensive or
          subsequent impact they have on the society. Just to give some
          examples:
        </p>
        <p>
          <br />
        </p>
        <p>Solution 1: Taxing the rich at a higher rate.&nbsp;</p>
        <p>
          This solution goes against the capitalist ideology, which assumes that
          the rich deserve their wealth because they work harder or smarter. If
          you are taxing them at a higher rate, aren’t you discouraging hard
          work and innovation?&nbsp;
        </p>
        <p>
          From a wider perspective, when the tax money goes to fund the social
          programs for the poor, some undeserving lazy people will benefit. So
          you are not just discouraging work, but also proportionally
          encouraging laziness in a way. This chips away at the competitive
          nature of the society. As laziness induced poverty keeps increasing
          and the innovations discouraged, even more taxes will be required. By
          the eventuality of its flawed design, this becomes an addictive
          self-reinforcing cycle until all incomes from workers gets distributed
          to even out the wealth gap, like communism where everyone is equally
          poor.
        </p>
        <p>
          <br />
        </p>
        <p>
          On a side note, the top wealth owners do not have income, but instead
          own assets. Unless the state forcefully takes and sell their asset
          (which is unlikely), they are not taxable anyway.
        </p>
        <p>
          <br />
        </p>
        <p>Solution 2: Increase the minimum wage.&nbsp;</p>
        <p>
          This pushes larger business to further automate, and smaller local
          business to go bankrupt due to not being able to pay the wages. As
          result, unemployment increases, making the situation worse overall,
          while the wealth gap keeps widening.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>Solution 3: Free education for all.&nbsp;</p>
        <p>
          While in theory this leads to more people having skillful jobs and
          increase competitiveness, it does not address the fundamental
          mechanism by which wealth flows to the richest. Skillful or not,
          employees could still be exploited for profit by the higher up. Or
          they can themselves become exploiters. This may be a bandage, but not
          the cure.
        </p>
        <p>
          <br />
        </p>
        <p>
          On a side note, the millennials are the most educated generation ever
          in terms of university degrees, and yet the most at risk of
          unemployment compared to the previous generations. Educated and even
          skillful workforce are still vulnerable to replacement. Market
          competition and pursuit of profit has driven artificial intelligence
          and automation at a rate that is too fast for college education to
          keep up.
        </p>
        <p>
          <br />
        </p>
        <p>Solution 4: Universal basic income.&nbsp;</p>
        <p>
          This relates a little to the above idea of accessible education. As I
          recall from the 2020 presidential candidate Andrew Yang, the idea is
          that the recipient can now use the extra money to move forward in
          life, such as attending school or change to a better job. This could
          be a short-term fix, but still does not solve the fundamental issue.
          You may have $1000 now to attend night classes, but even your newly
          acquired skills are still replaceable by robots. You have delayed the
          eventuality, not stopped it.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          I kept hammering on the fact that none of the solutions above address
          the "fundamental issue", and it is time to fully define it for the
          reader.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          First, a fully descriptive name may be, "the fundamental issue posed
          by the capitalistic mechanism". It can be viewed as an equilibrium
          problem; the system we have designed is trying to reach an equilibrium
          state that is unacceptable to us.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          We know that wealth begets wealth. If you have extra money, you can
          use your wealth to generate more wealth by putting it in stocks, which
          generated a return of 13.6% in the past 10 years (S&amp;P 500). With
          this return compounded year after year, you will keep growing much
          richer compared to, say, your neighbour who must work for subsistence
          with zero financial growth.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          However, in a broader sense your wealth is indirectly made by
          "exploiting" your neighbour to stay poor. To illustrate, he is likely
          generating much more revenue for the company than what he is paid for.
          Although this is a general business practice, it could be seen as a
          form of exploitation given that he is only paid enough to keep
          working. And if you happen to be invested in this company which keeps
          growing as result of such, your wealth would be made by indirectly
          exploiting others.
        </p>
        <p>
          <br />
        </p>
        <p>
          This is basically how stock markets really works to the benefit of the
          wealthy, by serving as their safekeep for the money made from
          exploitation. Even during the COVID induced economic downturn, the
          stock prices are getting so bloated that they seem more like a pyramid
          scheme than any reflection of the economy.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          Despite this, both the president Trump and Biden used the rising
          stocks as proof that they saved the economy. Don’t they know that the
          stock market does not include the entire economy, and that they
          ignored an entire segment of the population? In fact, much of its
          increase was possible by sacrificing a growing economical class of
          working-poor who are not even represented in the stock market. That
          is, the rising stocks themselves are being fueled by the rising wealth
          gap, as the money from the real-life base economy of the poor is being
          transferred up into the stock economy of the rich.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          To sum up, the one with more resources can continuously acquire more
          resource generating assets, at the expense of the less resourceful.
          This is like a game of "fish eats fish", where the bigger fish grows
          by eating smaller ones.
        </p>
        <p>
          <br />
        </p>
        <p>
          And what is the equilibrium to such a game? You will reach equilibrium
          when there is only one fish left. This is the real issue I am getting
          at, is that the capitalistic game we are playing is simply trying to
          reach its equilibrium point. Therefore, the rich keeps getting richer
          while the poor getting poorer.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          I understand the good intention behind all the proposed solutions
          above, but the system is not flawed, it is just doing exactly what it
          is designed to do. Does the game of monopoly end when all players are
          satisfied with their financial situation? No, it ends when there is
          only one winner. They might try to keep the game longer by giving out
          $200 cash every time a player passes over the starting point, but the
          game still will end eventually.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          The way I see it, we have started a giant game of monopoly since World
          War 2. Everyone was having fun in the 50s/60s chasing the American
          dream. But now the game is nearing the end, we can make out the
          winners, the trillion-dollar companies like Amazon, Google, or Apple.
          But what about the losers? Within monopoly, they get booted out of the
          game board, but in real life this translate to suffering, and an
          increase in crimes, overdose, and death. The mechanics of capitalism
          has made us in the 20th century, and is about to unmake us in the 21st
          century, as it continues towards its destined state.&nbsp;
        </p>
      </Element>
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>
      <Element name="sec3" className="element">
        <p>
          <b>Section 3, The impact of the problem:</b>
        </p>
        <p>
          <br />
        </p>
        <p>
          Now that I have defined the fundamental issue, it’s time to pin down
          why is such an equilibrium unacceptable to us. It is unacceptable
          simply because, the resources are not being shared in an efficient
          manner.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          In economic term, there is such a thing as the diminishing marginal
          utility of return. Roughly meaning that the more we have of something,
          the less value we get from it.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          Imagine a primitive and simple economy of 10 farmers, where one single
          farmer has 10 plows, and the 9 other farmers do not have any. While
          plows are necessary to loosen the soil to make produce, a single
          farmer can only operate 1 plow at a time and have no use for the 9
          leftover plows. The other nine farmers, meanwhile, could really use
          the plow and would get much greater utility from it. In such an
          unevenly distributed economy, the total output would only be equal to
          that of the one single farmer.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          On the other hand, if the resources are distributed evenly with one
          plow per farmer, then we have achieved the maximum utility. This
          economy would out-produce the former by tenfold, as all 10 farmers are
          producing at capacity. Throughout the remainder of the article, I will
          use the term "efficient" to describe such an economy. So in the
          context of this article, whenever I mention "efficient",
          &nbsp;“efficiently”, or “efficiency”, I am referring to this state of
          wealth distribution where the marginal utility of return is maximized
          for everyone. Likewise, when I mention the word “sustainable”, it
          means that the state is moving towards efficiency, not away from
          it.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          And that is just the economic aspect of it, the human aspect would be
          that the nine farmers, if not given the plow, would not be able to
          earn a living and suffer.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          So there you have it, we have come down to the underlying issue. Every
          time we talk about the wealth disparity, we are essentially referring
          to the problem of misallocation of resources. It is very important to
          see the problem this way, as it will be the basis from which I will
          form my solution.&nbsp;
        </p>
      </Element>
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>
      <Element name="sec4" className="element">
        <p>
          <b>Section 4, The two obstacles:</b>
        </p>
        <p>
          <br />
        </p>
        <p>
          The end goal is simple and straightforward, which is to get people to
          share their resources in an efficient manner. But this is not a new
          concept, in fact, communism was created for this, and of course it
          failed. What differs in my approach is the natural and organic way I
          go about to achieve it.
        </p>
        <p>
          <br />
        </p>
        <p>
          My solution transcends from the adherence to any system, whether
          communism or capitalism. Nor does it rely on people to change their
          existing mindset in any regard. As an analogy, we do not need to tear
          down the whole house to fix the water leak, there is just a small hole
          to be filled. This hole, in the context of wealth inequality, is our
          inability to share resources efficiently. Something is preventing us
          from doing so, and we need to find out what that obstacle is, before
          knowing how to remove it.
        </p>
        <p>
          <br />
        </p>
        <p>
          First, let’s use our cave dwelling ancestors of the hunter gatherer
          society as example. We know that sharing resources with each other is
          part of their daily lives, whether it is for social interaction or
          group survival. Altruism is not just a by-product of intelligence, but
          a survival trait or even a competitive advantage. Is it possible for
          us, in our society to recreate conditions for such altruism? So
          instead of a forceful resource allocation, as is the case with
          communism, let's figure out what truly induce people to naturally
          share resources.
        </p>
        <p>
          <br />
        </p>
        <p>
          If a hunter catches an animal, he would share it with the rest of the
          tribe. The women would have their share of food, and they in turn
          provide him with plant-based nutrients or other services. Even the
          other hunters who came back empty handed would still be given their
          share, because he knows that he may not catch anything the next time
          and would have to rely on them instead. We can see that sharing is
          clearly beneficial to the giver, and thus comes the motivation.
        </p>
        <p>
          <br />
        </p>
        <p>
          To contrast with the present day, imagine that you are a billionaire
          who is trying to do good. Would you share your wealth with the
          millions of disenfranchised and poor fellows? You may think that you
          would. But when it comes to the execution, you run into the questions
          of how and why?
        </p>
        <p>
          <br />
        </p>
        <p>
          First, how would you share your wealth? A practical issue is that you
          would have no idea where the real needy and deserving people are. It
          is easy to help, if you personally know the struggling person and see
          that he is a good human being who genuinely need a hand. But when you
          must filter through the population by the millions, the task to making
          sure that the money goes to the deserving ones is impossible.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          You may argue that the billionaires can just donate to charities. But
          the problem persists as the charities themselves won't have the
          capability to manage all that money. Remember, we are not talking
          about some "generosity" donation here, we are talking about an
          unprecedented amount of wealth transfer required to correct the wealth
          gap we have right now.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          The second is the question of why? Why would you share your wealth,
          what is in it for you? By giving the poor people the resource to reach
          their potential, you certainly make the society a better place. But
          this comes at the cost of your own fortune. Certainly, the ones you
          helped will be grateful, and help you out if you happen to be in the
          same situation in the future. But if you are truly worried about your
          financial state, wouldn't you be better off not giving out your wealth
          in the first place?
        </p>
        <p>
          <br />
        </p>
        <p>
          What about the goodwill generated by the recognition of being so
          generous? As the wealthy ones know, goodwill can be an asset to build
          one's image, which then open more economic opportunities. But goodwill
          itself is unpredictable, there is no telling of how much you will be
          getting, and how much is it really worth. One false accusation or
          Tweet can easily destroy one’s image. Also, goodwill does not escape
          the previously mentioned notion of diminishing marginal utility of
          return, so an overflow of it is not useful anyway.
        </p>
        <p>
          <br />
        </p>
        <p>
          Now I must touch upon the argument that people can simply be generous
          out of compassion, without expecting anything in return. I agree, as
          this is my belief and observation as well. I have been following the
          popular "Humans of New York" page on Facebook, and not long ago, it
          was featuring a lady named Tanqueray, telling her personal story of
          being a burlesque dancer in 70s New York, and how she has since fallen
          on hard time. There was a GoFundMe campaign set up to help her out,
          and people donated over $2.5 million in a week.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          So yes, people are definitely willing to help out when given the
          chance. But once again, pure altruism cannot be relied upon for the
          scale of sharing required to fix the issue. With Tanqueray, we are
          talking about tens of thousands of people donating what is chump
          change to them. All of this just to help one person.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          To induce the magnitude required, there must be a real benefit to the
          donor as well. This does not make them selfish, or their intention
          impure. In fact, it is a matter of practical sustainability. If one
          keeps giving but receives nothing in return, one will eventually lose
          out. Our society has evolved so that no one is self-sufficient on his
          own. One provide to the group, and receives something back from the
          group. If either act is missing in the exchange, the group will be
          inefficient and unsustainable.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          I digressed a little, but all to showcase my original point on the
          questions of how and why to share wealth; that it is difficult to
          reach out to those truly in need, and there is not enough individual
          incentive to do so.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          Why does our hunter-gatherer ancestors not have this problem? Because
          they live in smaller and isolated groups. The close proximity between
          their members provides the high level of interaction required for
          proper resource distribution. First, they are not confronted with the
          issue of not knowing who to help. Because they are constantly
          communicating with each other, they are always aware of how important
          each one is to the tribe, and what kind of assistance they need or can
          provide.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          Secondly, there is great incentive to help. Being in a small group,
          any action performed by its members would have an immediate impact. As
          such, one must behave well for the sake of his tribe and himself. For
          example, if a member is a great contributor who always brings in food
          for everyone, he may gain prominence in mating choices, or decision
          making. If a member is more of a freeloader, he may not enjoy the full
          protection or care if injured.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          As I wrote above, our society, being big and disjointed as it is, do
          not give people such an incentive to share for the greater benefit.
          This is very dangerous because when everyone is acting greedy and
          selfish, everyone is protected from being blamed as the bad guy.
          Without accountability, such collective behavior spread across the
          population and compounds to the modern day’s decline.&nbsp;
        </p>
      </Element>
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>
      <Element name="sec5" className="element">
        <p>
          <b>Section 5, The missing link:</b>
        </p>
        <p>
          <br />
        </p>
        <p>
          So what do we do? Our society cannot simply go back to the hunter
          gatherer way of life, because we would have to forgo technologies. You
          see, technologies were created to help increase production. Such an
          increase in production led to a surge of population, which then formed
          the modern society facing the current problem in the first place. We
          are looking at a catch-22 situation here.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          Let's use a reductionist approach to summarize the situation. In a
          hunter-gatherer society, we have little technology, which keeps
          production low, but wealth disparity is also low. But today, we have
          more technology, which increases production, but wealth disparity is
          high. We can see that an increase in production does not mean that
          wealth is automatically distributed efficiently. Could it be that
          another factor we haven't accounted for, is responsible for wealth
          distribution?
        </p>
        <p>
          <br />
        </p>
        <p>
          Let's think about the required factors to bring wealth to someone.
          First, you produce the good, then you deliver it. We have the
          technology to make wealth, but do we have the technology to deliver?
          It seems so too, we have massive logistic capabilities to deliver
          physical goods anywhere in North America within 1 day, like Amazon. We
          also have the web technology to transfer money to anyone instantly.
        </p>
        <p>
          <br />
        </p>
        <p>
          Then, why are we still seeing increasing wealth disparity? I think
          there is a third factor that we either ignored or took for granted. I
          did allude to this before, and it is the ability to interact and
          communicate. This is important as it tells us WHERE to distribute the
          wealth. You want to distribute it to those who can make the best use
          of it.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          So the equation for wealth transfer should really have three
          components, first to accumulate wealth, then to find out where are
          they needed, and finally we can proceed to distribution. Each of the
          steps are affected by its own technological development. We have
          nailed the technology for the first and last part, namely for
          production and logistic, but do not have the necessary technology for
          the middle part of communication. This is equivalent of building a
          furniture, having the driver picking up the furniture, but have no
          delivery address. Because an ingredient is missing, the final outcome
          of distribution won't happen!
        </p>
        <p>
          <br />
        </p>
        <p>
          The hunter-gatherers were able to make-do without communication
          technology because their production and logistic technologies were
          just as underdeveloped. In other words, the ability to efficiently
          distribute resources is not about how developed any of the
          technologies are, but about the BALANCE between them. A broken balance
          is what led to the situation today. Let me demonstrate again using a
          simplified version of modern economy below.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          Imagine an economy with 10 watermelon farms who are isolated enough so
          they cannot communicate with each other. They produce one watermelon
          daily, and are all connected by the common vendor who buys 10
          watermelon in total. So every day, the vendor goes to one farm, buys
          one watermelon, and goes to the next until he has the 10 watermelon he
          needs to sell in the market. But one day, one farmer, let's call him
          Bob, invented a tool that allowed him to make 10 watermelons daily.
          The vendor soon realized that he can just buy all the watermelon from
          Bob, and stops visiting the other nine farmers. As result, Bob became
          very wealthy, and the other farmers, with no income, become desperate.
          Although simplified, this is the situation akin to ours, where we have
          the production technology and the logistic technology but no proper
          communication technology.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          Now imagine if the farmers can communicate to each other. What will
          happen if everyone realized, including Bob himself, that Bob is
          suddenly outproducing the other farmers, and thus taking their shares?
          There are a lot of suppositions we can make here, but undeniably,
          there is now pressure or incentive on Bob to share his wealth. The
          increased interactions gave the farmers new possibility to cooperate,
          and edging them to behave more communally to take advantage of the new
          opportunities.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          If Bob still refuses to share, he could face repercussion like those
          faced by a misbehaved member of a hunter-gather tribe; the other
          farmers could band together against him, or if another farmer makes an
          even better technology improvement, Bob could expect no reprieve. What
          I believe is likely to happen, is that Bob, being now able to interact
          with the others, will share his wealth by prioritizing those he thinks
          can benefit him back. For example, he could choose those who are just
          as hardworking, so they can produce other products. Then instead of
          eating watermelons all day, the whole community of farmers could now
          eat and sell cucumbers, corns, and prosper together.
        </p>
        <p>
          <br />
        </p>
        <p>
          Another cool way to look at it is via the Game Theory’s Prisoner’s
          Dilemma. Without going into details, it is basically a situation where
          two prisoners who are kept apart will both end up with a worse jail
          sentence, as they act logically for their own self-interest by ratting
          out each other. However, if they are locked together and allowed to
          communicate, they would logically reach an agreement to keep silent,
          and thus both receive a lesser sentence. This is what our current
          society feels like. Everyone is looking for his own interest at the
          expense of the greater common good. The whole idea of improving the
          communication technology, is to break down the wall between us so we
          can work together towards a better outcome for all.&nbsp;
        </p>
      </Element>
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>
      <Element name="sec6" className="element">
        <p>
          <b>Section 6, The bad state:</b>
        </p>
        <p>
          <br />
        </p>
        <p>
          Just to be clear, by communication I am not talking about those
          endless back-and-forth that never escapes the confines of the
          internet, but meaningful interaction inducive to real life changes.
          Here you may point out that we do have the technology to communicate.
          We have Facebook to keep in touch with friends, LinkedIn to find jobs,
          Tinder for relationships, Meetup to meet new people. So why am I
          saying that the communication technology is inadequate?
        </p>
        <p>
          <br />
        </p>
        <p>
          While I agree that we have made such progress in communication
          technology, they do not match the progress we have made in production
          technology. Thus, we still have a technological unbalance here. In the
          most basic sense, the benefit we received as a society from the
          communication improvement, cannot offset the net harm caused by the
          wealth unbalance as result of the production improvement. Unless they
          can be brought to match up, our society will suffer. This was the
          point of the previous example with the 10 farmers.
        </p>
        <p>
          <br />
        </p>
        <p>
          But the previous example works on a societal level in a simplistic
          way. In today’s complex society, you wouldn’t know who is taking
          earning power away from you. All you know is that suddenly your hard
          learned skill is no longer valued. So how would an improvement in
          communication help when you don’t even know who the so-called Bob is?
        </p>
        <p>
          <br />
        </p>
        <p>
          The short answer is: you wouldn’t need to know who Bob is to feel the
          improvement in your individual life.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          The long answer is: Hold on to your hats, as I answer this in the
          current and next section, using a mathematical model based on Maslow's
          hierarchy of needs. These two sections are important as they lead
          directly to the final actionable solution.
        </p>
        <p>
          <br />
        </p>
        <p>
          First, let's define the term "utility", as how much benefit can
          someone get in one day, on the scale of Maslow's hierarchy. Say that a
          utility of 50 means that your basic need of food and shelter is
          satisfied, a utility of 80 means that your psychological needs of
          love, belonging and self-esteem are satisfied, on top of the previous
          basic needs. Finally, a utility of 100 means that all of your needs
          are satisfied, including the highest need for self-actualization. In a
          fully efficient society, people would obtain the utility of 100. This
          means that not only their basic needs are satisfied, they also have
          the time to create and invent new things, achieving their full
          potential for themselves and the society.
        </p>
        <p>
          <br />
        </p>
        <p>
          Now imagine yourself as a taxi driver working 8 hours, spending 6
          hours on social media, and the remaining 2 hours learning new skills
          to find a better job, for the total of 16 waking hours. You have the
          optimum 100 utility points required per day to be fully
          satisfied.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          Your daily basic needs of 50 utility points are satisfied by working
          at the return rate of 50 divided by 8, or 6.25 unit/hour, your social
          need of 30 points is fulfilled at the rate of 30 divided by 6, or 5
          points per hours, and lastly your self-actualization needs were
          fulfilled by your self-learning studies at 20 divided by 2, or 10
          points per hour. Life is great and in perfect balance.
        </p>
        <p>
          <br />
        </p>
        <p>
          Then suddenly some "tech bro" invented an app called Uber, allowing
          anyone with a car to make money giving out rides. Now your daily
          customers have dropped by half. So instead of getting the utility of
          50, now you get the utility of 25. To make up for the remainder 25
          points, you decide to take another job as a room attendant for 2 hours
          every day, at a hotel. When you go home, you'd still spend the 6 hours
          required on social media to satisfy your psychological needs. Then
          guess what, you no longer have time to work on your self-actualization
          as you have maxed out your 16 waking hours. So currently, that is 8
          hours as a taxi driver, 2 hours as a hotel room attendant, 6 hours on
          social media.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          This means that you can no longer learn the skills necessary to find
          yourself a better job. Even worse, you are now at the mercy of the
          "tech bros", and can only pray that they will not invent something
          called Airbnb to siphon all your revenue from your hotel job as well.
          This is what I meant when I mentioned the net harm caused by the
          wealth unbalance from a technological improvement in the production
          sector.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          You may say that, in a similar situation, you would ditch social media
          and spend the time studying instead. But such technicality is beside
          my point, which is that your capacity to satisfy some basic needs,
          whatever they are, can always be reduced so that you are stuck to the
          point of having no social mobility to escape.
        </p>
        <p>
          <br />
        </p>
        <p>
          Additionally, this is a contrived example made to be quantifiable and
          simple, and I am aware that the demarcation of needs and means are
          blurred in real life. You can certainly use social media to earn a
          living to satisfy your basic needs, or for self-fulfillment, instead
          of just for psychological needs as it is supposed here.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          But we are not done with our example yet. We have quantified the
          problem, now we need to quantify the solution. Remember the previously
          calculated utility of return for social media of 5 per hours? What if
          the social media technology just got better, and improves the utility
          of return to 7.5 points per hour? As such, you would only need 4 hours
          to satisfy your psychological needs, and now freed up the 2 additional
          hours required to satisfy your self-actualization need. Your daily
          utility points are back to 100, and you are once again maximizing your
          potential.
        </p>
        <p>
          <br />
        </p>
        <p>
          This example is just intended to show the mechanism by which a
          deficiency caused by wealth unbalance, could in fact be offset by an
          improvement elsewhere. Since we cannot stop the progress of the
          production technologies, we must balance it with an improvement in the
          communication sector.&nbsp;
        </p>
      </Element>
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>
      <Element name="sec7" className="element">
        <p>
          <b>Section 7, The ideal state:</b>
        </p>
        <p>
          <br />
        </p>
        <p>
          I know it seems convenient to pump up the utility point of social
          media from 5 to 7.5. What does this even mean in real life? Let me
          answer this with another quantifiable example.
        </p>
        <p>
          <br />
        </p>
        <p>
          First, recall the forementioned platforms of Facebook, Meetup,
          LinkedIn, and Tinder? Notice how each of these accomplish a single
          purpose. Take LinkedIn for example, it is specialized for
          professionals to network and find job opportunities. This is a good
          business model, where one creates an app to fulfill a niche need, then
          expand horizontally across geographies for maximum users and maximum
          profit. This is how almost every social media app has done.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          From a humanistic view, this model is very inefficient. Programmers
          are used to code programs to do a sequence of one task at a time,
          relying on the lightspeed execution of the computer to give appearance
          of efficiency and multitasking. Unfortunately, they assumed the same
          pattern to human interaction in their app design, by allowing one need
          to be satisfied at a time.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          Real humans cannot work at lightspeed, and usually have many needs to
          be satisfied at various degree. Currently, if you are simultaneously
          looking for a job, a relationship, and a fishing buddy using social
          apps, you would have to make three profiles, and devote effort on the
          three platforms of LinkedIn, Tinder, and Meetup. In today's fast paced
          world of ever shrinking attention span, this would not be a rewarding
          use of your time.
        </p>
        <p>
          <br />
        </p>
        <p>
          When people socialize in real life, they use a more natural approach.
          They would get to know the person first, then decide which of his
          needs can be satisfied from her. There is no restriction on the
          purpose as it is the case with online platforms. You could be talking
          to someone who can satisfy all your needs, by becoming your boss, your
          romantic partner and fishing buddy at the same time!&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          Here is a scenario. Say that you have the same three needs above, and
          your world has 20 people, 5 of which satisfy your employment need,
          another 5 your relationship need, and another 5 can be your fishing
          buddy, with no overlapping. Therefore, when you go to each of the
          respective sites, and talk to someone, there is 5 out of 20 chance of
          satisfying your need intended for that site. Your success rate for
          each interaction is 5 over 20, or 25%. Let’s call this a utility rate
          of 25% per each interaction. Remember, you cannot cross over to
          satisfy a need that is not intended for the platform, meaning that if
          you meet someone who can satisfy your relationship need on LinkedIn,
          you wouldn't know because you are not even aware that she is looking
          for relationship unless you meet her on Tinder instead.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          Now what about in real life? Well, the utility for your first
          interaction is up to 15 over 20, or 75%. As you are no longer bounded
          by the purpose of the site, all 15 people can be counted as able to
          satisfy one of your need. This is substantially higher than the
          previous 25%. Of course, this percentage shifts as more people you
          meet, and more needs are satisfied. But it is still higher than the
          online model, as now any interaction can potentially satisfy multiple
          needs, so you don't have to meet the same person again later.
        </p>
        <p>
          <br />
        </p>
        <p>
          If you think about this, humans have followed this natural pattern of
          interaction for most of our history. In each medieval town, we had
          town squares, which are not restricted for a rigid, singular purpose,
          but for anything like markets, theaters, churches, or even rallies.
          People never needed a particular reason to visit, they can go just to
          keep in touch with the news and explore any potential opportunities
          that they might not even be aware of. And this is another downside of
          current social media. They assume that everyone is knows exactly what
          they want, which is not the case in real life.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          Anyway, if you compare the utility of 75% to 25%, you could suppose
          that the real-life model is 3 times more efficient than the online
          model. Remember the previous notion of improving the utility return
          for the time spent on social media, from 5 to 7.5 points?&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          This is what it means. Previously we had a utility of 5 per hour, and
          have to spend 6 hours to satisfy the 30 daily utility points needed.
          If we are three times as efficient as in this example, our utility
          point would be 15 per hour, and we would only need to spend 2 hours to
          satisfy the social needs, and free up time to devote to
          self-improvement.
        </p>
      </Element>
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>
      <Element name="sec8" className="element">
        <p>
          <b>Section 8, A beautiful world:</b>
        </p>
        <p>
          <br />
        </p>
        <p>
          The next question is, can we simulate this socialization framework in
          the online world? For a web developer with a keen interest in social
          media like myself, the answer is a resounding yes, and we can even do
          better!
        </p>
        <p>
          <br />
        </p>
        <p>
          Now I'd like to ask that you keep your imagination open, as I describe
          the type of social media required for not only fixing the wealth gap
          issue, but help our modern society thrive sustainably.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          To start off with the basics, nothing prevents us from combining all
          the existing social media apps on a single platform. This alone would
          be an equivalent approximation of real-life social scene. Instead of
          limiting the purpose of its users, we can have a platform that is
          purpose agnostic. The app is only responsible to make its users
          visible to others, while the users themselves determine what they want
          to do with the app. You can indicate, for example, that you are
          looking for relationship, open for employment, and want to form a band
          at the same time. You would also describe your skills, showcase your
          work, or share ideas.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          How can someone find you based on your profile? This is where the
          magic happens; the other user would be able to narrow down the
          population using her own customizable criteria. For example, a band
          member can filter for someone with guitar skill between the age of 20
          to 25 and see a whole map of people in her hometown matching those
          criteria. Then she would select your profile, and checkout the video
          you have uploaded shredding your guitar, and finally message you to
          join her band.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          The idea is to create an open world system where everyone and every
          post is visible. This is unprecedently empowering because you, as an
          individual, now have the power to interact with the community directly
          without prerequisite or limitation. Unlike Facebook or Twitter, you
          don’t have to build your network by adding friends or get followers
          first. &nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          You can express anything you want, whether it is an article, artwork,
          project, etc., and get a reaction from the community. I would love to
          have such a platform so I can share this “Prosperity Manifesto” to the
          world, not just to my friends or followers. Currently, I don’t even
          know how to publicize my article in our split social media landscape.
        </p>
        <p>
          <br />
        </p>
        <p>
          The user can also customize or prioritize what they want to see. For
          example, they can choose to see only posts from authors matching a
          certain criterion, or about certain topics. The idea is to start with
          an open world system that connects everyone, then give the users the
          extra degree of freedom to choose the content according to their
          ever-changing preference.
        </p>
        <p>
          <br />
        </p>
        <p>
          We could also go beyond human’s physical limitation to fully leverage
          the digital possibilities. Instead of messaging one person of interest
          at a time, why not just message all of them in one click, whether as a
          private chat or group chat. For example, you are organizing a big
          party, and want to invite everyone who plays the online game of
          Leagues of Legends, and are also ranked above Diamond. You would
          simply do a filter search for the list of all such users, and
          customize a message to be sent to all of them. For the techies who may
          be reading this, this may involve creating an API to the actual game,
          to grab information from your Leagues of Legends profile, into your
          social network profile.
        </p>
        <p>
          <br />
        </p>
        <p>
          It is important to see this as a foundation technology upon which
          endless possibilities can be exploited. If we add a feature to allow
          financial transactions between users, we then opens the door for
          business contracts to be drafted and fulfilled exclusively on the
          platform. Or we can allow local businesses to have profiles as well,
          which leads to a feature where users can leave ratings on such
          profiles.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          Of course, most of such functions do exist in real life on different
          platforms. But something magical happens when you mix them together, a
          sort of synergy that allows you to build on more features that were
          previously not possible. This synergy is what takes the social
          experience to the next level in terms of what you can do. Imagine you
          are in a city of millions, and you want to find people who are, say
          bikers who are also fans of Sailor Moon. You may find only 10 people
          with such strange complexity, but at least you found your tribe. The
          curated social media landscape we have today simply do not allow us to
          express our humanity fully and freely.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          The Rolling Stones, arguably the biggest rock band in history, was
          only possible because Keith saw Mick on a bus, holding a Muddy Waters
          record back in 1961. Realizing a common interest, they started talking
          and ended up forming a band that still tours to this day. In our
          modern cities, where millions take transit, how many of such missed
          connections happen every day? Imagine how many amazing partnerships we
          can have had we captured those opportunities.
        </p>
        <p>
          <br />
        </p>
        <p>
          Now you may ask, how does this help with the wealth gap again?
          Remember, my premise is that an increased interaction helps by letting
          the community know where the resources are located, and where are they
          needed. This was the missing ingredient for a better resource
          distribution. To get this ingredient, we really have to up our social
          interaction game. A better social media will certainly increase
          interaction, which will certainly render the society more transparent,
          which will certainly bind the fate of the community closer, which
          would certainly give reason to cooperate and share.
        </p>
        <p>
          <br />
        </p>
        <p>
          Just for the sake of brainstorming a specific example, we could enable
          an "urgent help needed" status feature on each profile. Then we can
          filter on a map all those who requires assistance, whether it is to
          help cover the rent, food shortage, etc,. Or we can allow users to
          proactively post feed tagged with "help needed". Other users who see
          such posts can then help. To add more incentive, we can even credit
          the helpers by awarding badges on their profile, or have a public
          ranking for the biggest contributors.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          But beside the direct assistance above, most of the wealth transfer
          would be the result of the increased opportunities. Now we can
          encourage entrepreneurship, by facilitating the connection between
          those who have ideas, to those who have the skills, to those who have
          the money. Resources will flow like never before, from those who have
          it, to those who can make the best of it.
        </p>
      </Element>
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>
      <Element name="sec9" className="element">
        <p>
          <b>Section 9, The path:</b>
        </p>
        <p>
          <br />
        </p>
        <p>
          The last question to ask is, how can we create such a massive
          platform? Just the idea of agglomerating all social network together
          seems unmanageable. Even Facebook and Google, with their advanced
          artificial intelligence and armies of moderators, can barely keep up
          with their own sites.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          Here is where I need to clarify something. The application I described
          above is not the end goal at all. It is not like we can wash our hands
          once the app is created. Addressing the wealth gap is a continuous
          process. Just like the technological advancement cannot be stopped to
          create wealth, the tools needed to know where to distribute them must
          keep up as well. This continuous process means that the described
          application is not the start either, so you do not have to worry about
          creating something so massive right off the bat. &nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          Instead, we can start small, and make its growth organic and gradual
          to become something big. So, what we really have to worry about is,
          how to make the growth sustainable. In the tech industry, when we want
          to create a complex product, we would use an approach called the MVP
          approach, which does not stand for Most Valuable Player, but for
          Minimum Viable Product. This means to first create the most basic
          version of the product, with the minimum requirement to generate
          feedback or revenue, so we have the cash flow to introduce subsequent
          additions. These improvements are themselves prioritized according to
          their cash flow generating capacity. Such a process repeats until we
          have achieved all we wanted to accomplish in the final product.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          The scale of our application is even bigger than a singular product,
          but the principle is the same. The key to success to our application,
          is what I call a "feedback loop". This means that our success depends
          on our ability to receive the feedbacks and to act accordingly to the
          community we are serving. This way, the app and the community can
          prosper as one. I stress the importance of the ability to react to
          these feedbacks, because currently no social media can do so.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          Let me explain. Social media are very powerful in changing how we
          communicate fundamentally. But due to their success, the entire fabric
          of society changes, and this creates new demands for more social
          power. For example, Facebook was initially conceived for friends in
          real life to stay in touch with each other online. This in turn
          creates a massive outpouring of online users. Since everyone is now
          connected online, there is less real-life interaction, which in turn
          prompts the need to make friends online directly. This is the
          community feedback I was referring to, not some actual feedback
          submitted by an user. Because you have changed the way people lived
          for the better, new challenges arise.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          My problem with the existing social platforms is that none of them can
          meet these new challenges. The reason is simple, as they were
          inundated by their own initial success, they focused all their
          resources to scale out geographically to more users for maximum
          profit. There are no resources left to spend on the innovations
          required, to tackle the new challenges of the changing society that
          they themselves shaped. This is a trap cycle, because now that their
          platform has become so big and worldwide, any major improvements are
          very demanding, if not impossible to implement due to their massive
          scale. Their model now becomes changes resistant. Therefore, major
          social media like Facebook nowadays spent most of their resources on
          tweaking data-gathering methods, improve monitoring of news, etc,.
          When the feedback involves a fundamental change in the base model,
          such as adding a feature to make new friends online, Facebook simply
          do not have the resources for it. It is not surprising that the big
          social media platforms don’t really change or truly innovate even
          years after their initial inception.
        </p>
      </Element>
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>
      <Element name="sec10" className="element">
        <p>
          <b>Section 10, The answer:</b>
        </p>
        <p>
          <br />
        </p>
        <p>
          For us to escape the vicious cycle that renders social media stale, we
          need to ensure that we are always in the position to act on the
          feedback provided by the community. By the above logic of larger
          platform being unable to adapt, we would need to scale down the reach
          of our platform. What would be the ideal size, should we limit the
          targeted community to that of a country, a state, a city, or a
          neighbourhood? Let me ask this question to you, as a member of the
          community,: when you are looking for news that may most affect you
          directly, which news do you read? I would venture to say that it would
          be the city-news. Personally, I care way more about the developments
          in my city, than that of my province, state, or country.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          This is because what happens in a city affects me more due to myself
          being physically present. Cities, or urban agglomerations, are their
          own entities with natural delimitation. When I drive from Vancouver
          down to Seattle, I first leave Vancouver, drive for two hours into
          nothingness, then I arrive to Seattle. The nothingness between them
          serves as a boundary so that events happening in Seattle echoes within
          Seattle and do not travel to Vancouver.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          The other denominations such as states, provinces or even country,
          have an artificial boundary instead of a natural one. If you see a map
          of the United States or Canada at night, you can clearly see where the
          cities are by lights but won't be able to tell where the boundaries
          between the states and provinces. Likewise, a neighbourhood within a
          city also do not have a natural boundary, so anything that happens
          inside of it, whether rising housing prices or crime rates, can easily
          spread to the next neighbourhood. As such, the feedback itself could
          be distorted or simply not reverberated back to the originating place,
          and we cannot see the real effect of our social media application.
        </p>
        <p>
          <br />
        </p>
        <p>
          Due to a city's natural ability to provide the feedback loop, I would
          say it is the optimum size for a social network. This is where the
          social platform can make its impact, react to the feedbacks, and keeps
          on improving.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          This constant interaction loop between the application and the
          community makes it integral to the growth of the community itself. We
          often talk about a city's infrastructure in terms of public
          transportation and roads. But as the problems we are facing in the
          digital age are becoming more complex, we need to be accepting to the
          idea of having a digital infrastructure as well. This helps connect
          any missing link in our intertwined and complex world. As an usage
          example, city councils could use it to directly consult the city
          residents regarding ways to tackles common issues, or gauge the
          popularity of a potential new policy via polls, before introducing it.
          If we don't have such a digital infrastructure, we would not even have
          the required tool to solve these problems in the first place, whether
          it is about homelessness, rising prices, exploitation of resources,
          etc.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          But what is the point of having this platform for a single city, when
          the problem of wealth disparity is country wide or world-wide? My
          reasoning here is simple: once you demonstrate that you can do it in
          one city, the other cities can easily follow suit. One thing that
          works in our favor is that since the social media program will be
          written in code, we can and should open source the code to the public.
          This means that the programmers in the other cities can just take our
          code and deploy the same application in their cities right away, or
          even customize it according to their city's specification and
          needs.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          The result is that every city and its residents would see and control
          its own development process. Too long we have let our cities’
          resources being sucked into Silicon Valley and Wall Street. We need
          something that is made by its citizens, for its citizens, because they
          are the real stakeholders, and thus can truly care. When the cities
          thrive again, maybe they can then extend to each other for inter-city
          opportunities like connecting neurons, and by extension make the whole
          country prosper. This would be a more organic and sustainable way of
          development.
        </p>
        <p>
          <br />
        </p>
        <p>
          Remember all the way to the beginning, when I said that I would
          present an actionable plan? This is it, a social media focused on the
          city. I won’t go into the details of step by step or feature by
          feature implementation, although I do know where I want to start with
          myself. Again, things can change depending on the feedback by the
          community, so we may even end up with a different platform than what I
          described before. The general direction of building an online network
          that interacts and grow with the community is what matters, and
          remains unchanged.
        </p>
      </Element>
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>
      <Element name="sec11" className="element">
        <p>
          <b>Section 11, Final thoughts:</b>
        </p>
        <p>
          <br />
        </p>
        <p>
          Thank you for reading this far. We came a long way to answer the
          seemly abstract and open ended question on how to fix the wealth
          inequality. To sum up, the advent of production technology has
          increased our resources, but the interactive technology did not keep
          up, so we do not know where to direct our resources. The
          hunter-gatherers were able to know this because they spent most of
          their time socializing.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          Our society is even more complex and yet we interact less. To correct
          this, we need to improve our interactive technology, so we can bridge
          the distance between us for proper communication, as demonstrated in
          the example of watermelon farmers. But such technology fundamentally
          works on an individual level, by providing the incentive to use it via
          rewards. On an individual level, these rewards are in the form of
          being able to better satisfy one’s need as per the example with
          Maslow’s hierarchy of need. But in the context of wealth distribution,
          these rewards translate to promoting resource sharing in an efficient
          manner. Finally, I described what exactly such a technology should
          have, by logical reasoning, and narrowing down to the actionable plan
          of creating a city-based social media.
        </p>
        <p>
          <br />
        </p>
        <p>
          On hindsight, I think my whole piece may be clearer if I reverse the
          logical flow, by starting on the individual motivation level, then
          work up to its societal impact of reducing wealth gap. In any case,
          the idea stays the same; a better social media tool for individuals,
          leads to better resource sharing in the society.
        </p>
        <p>
          <br />
        </p>
        <p>
          I think this solution should work because it relies on an
          understanding and respect of human nature. We are not forcing anything
          here, we are focused on changing the environment itself, by opening
          the door for communication and cooperation. If the environmental
          conditions themselves are not there, people would not share of their
          free will, and thus no change in policies or free money can fix the
          issue in the long term.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          This does not suffer from the issue of various socialist policy that
          benefits the universal poor, regardless of deserving or not. I
          probably should have highlighted this earlier, but notice how I never
          defined who deserves or does not deserve help. The social network
          simply opens the door for the possibility of helping, but let the
          people decide whom they want to share wealth with. The definition of
          who’s deserving or not, should never be universally defined, or it
          will inevitably lead to systematic loophole for exploitation. This
          responsibility is trusted on the shoulder of each person looking to
          share their wealth, as their interpretation varies, and may adapt
          according to the changing social economic trend.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          Likewise, this transcends from any type of economic system. Communism
          produces crooks and thugs, while capitalism gives free rein for untold
          greed and appalling selfishness. By not defining the good and bad
          behaviors, we no longer protect them with an artificial construct, and
          subject them to the true laws of market. In a healthy social
          landscape, true good behavior will reward themselves, while the bad
          ones will be exposed and discouraged. This is way to sustainable
          development.
        </p>
        <p>
          <br />
        </p>
        <p>
          Again, the wealth inequality can be fixed, and with not that much
          effort if you have the right tool. We just need to tweak capitalism
          with a touch of right technology. People tend to see technology as a
          bad thing nowadays, but it really is just a tool. As a developer who
          understand what can be accomplished with technology, I can tell you
          that much of its truly beneficial uses are being discarded as they are
          not monetizable. I may go as far as to say that the entire direction
          of technological advance today has been hijacked by the capitalistic
          need of profit making. Wealth does not equal progress if it is held by
          the 1%. The problem was caused by technology, so it makes sense to
          rectify it with technology as well. &nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          Lastly, if you look at all the countries controlled by a handful of
          elites or dictators, you realize that they are insanely obsessed with
          monitoring and breaking down free interaction between its citizens,
          just to maintain their power and wealth. If the bad guys who are doing
          the oppression understand the threat of communication to the status
          quo, then why are us, the good guys, so oblivious to its intrinsic
          value in fighting it? Let’s take some tangible action before it is too
          late.&nbsp;
        </p>
        <p>
          <span style={{ whiteSpace: "pre" }}>&nbsp; &nbsp;&nbsp;</span>
        </p>
        <p>
          I don’t know what a perfect society look like, or what a potentially
          maximized society can achieve, but I believe it all starts with the
          creation of a city based social media. I myself have been working
          towards this goal for the last 5 years. In fact, I got into coding
          precisely so I can create such a platform.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>
          Unfortunately, my process has been slow due to work and study
          commitments. If you liked what you read, and have the resources and
          knowledge to make this happen, please take this idea as your own and
          go for it. Otherwise, you can also help by sharing this “Prosperity
          Manifesto”. If you are interested in my particular endeavour, and
          being updated of my next milestone, please visit the contact page
          at&nbsp;
          <a href="/contact" target="_blank">
            www.endwealthgap.org/contact
          </a>
          , and leave your name and email.&nbsp;
        </p>
        <p>
          <br />
        </p>
        <p>Together, let’s end our society’s downward spiral.</p>
      </Element>
    </div>
  );
}

export default Text;
