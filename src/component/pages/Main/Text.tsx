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
        You are about to read a manifesto on how the fix the increasing wealth
        gap in the West. This is not an ideological or argumentative piece, but
        a step-by-step explanation based on logical reasoning and even some
        simple math. This is done in the hope that we can have common ground and
        take meaningful action together. Due the scale of the issue, even the
        simplest logical deduction requires that few common understandings be
        laid out first, making this a 9000 words piece. So please make yourself
        comfortable when reading this.&nbsp;
      </p>
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>

      <Element name="sec1" className="element"></Element>
      <p>Section 1, Introduction:</p>
      <p>
        <br />
      </p>
      <p>
        I'd like to start by telling a tale of two nations. A few hundred years
        ago, China was the wealthiest country on earth, with a GDP accounting
        for a quarter of the world. But behind its wealthy facade hides a dark
        secret: 90% of the Chinese are illiterate peasants. The ruling 10% elite
        have made sure that no peasants are able to read or write, by making the
        Chinese writing too difficult and time consuming to learn. Unlike
        English, or any Romanized language, Chinese characters have no
        connections between how it is written, and how it is read. To become
        literate, one must memorize the writing and then the pronunciations of
        hundreds of characters with no discernible pattern. The purpose of the
        elite was to keep the peasant mass uneducated, uninformed, and unable to
        rise against them.&nbsp;
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
        been the world's leading economy for centuries until then.&nbsp;
      </p>
      <p>
        <br />
      </p>
      <p>
        For me, the decline happened centuries ago, when the elite 10% decided
        to hold onto power at the expense of the rest. They have created a
        wealth gap between them and the population, and to maintain that wealth
        gap, they have engineered a knowledge gap by making everyone illiterate.
        As such, there were little possibilities for innovation, and when it
        comes time to industrialize, China simply do not have enough literate
        people to kickstart the whole process.&nbsp;
      </p>
      <p>
        <br />
      </p>
      <p>
        When we describe modern America’s decline, we often cite the Roman
        empire’s collapse, which occurred relatively quickly. But I would say
        that we are more comparable to that of the Chinese empire, a slow and
        imperceivable death. The gap between the rich and poor is widening, not
        just the wealth gap, but a knowledge gap as well. But we don’t see it,
        and we keep praising our rising GDP and stocks. Sadly, it is always the
        same mechanism that makes and breaks empires, whether China or Rome.
        Nations adhere to the principles that made them rich, but these very
        same principle will also undo them. I so wish that we can learn from
        history, so at least America can transcend and break this cycle.&nbsp;
      </p>
      <p>
        <br />
      </p>
      <p>
        Since COVID, many people realized the seriousness of the increasing
        wealth gap. But no one seems to have a real solution for this. People
        tend to focus on fixing the symptoms of this issue, such as rising crime
        rates, homelessness, or housing prices, but not the issue itself. For
        those who try to tackle wealth inequality directly, their solutions are
        often aimed to even out wealth distribution through policies that help
        the poor. This is also a non-solution, as it doesn’t correct the
        mechanism within capitalism that always leads back to the same
        problem.&nbsp;
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
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>

      <Element name="sec2" className="element"></Element>
      <p>Section 2, The cause of the problem:</p>
      <p>
        <br />
      </p>
      <p>
        As a web developer, I spent many hours chasing bugs and fixing broken
        programs, and developed an appreciation of all the pieces it takes to
        make a simple website running. In the computer world, either you get it,
        or you don't. The machine does not care about how much you pray, how
        popular or confident you are; if you make a mistake, you get slapped
        with a bug all the same. At the cost of being constantly humbled, I
        gradually learned to consider a problem from of all its angles and
        depth.&nbsp;
      </p>
      <p>
        <br />
      </p>
      <p>
        Unfortunately, this mindset seems to be lacking when it comes to
        tackling the real-life issue of wealth inequality. The proposed
        solutions do not take into consideration the comprehensive or subsequent
        impact they have on the society. Just to give some examples:
      </p>
      <p>
        <br />
      </p>
      <p>Solution 1: Taxing the rich at a higher rate.&nbsp;</p>
      <p>
        This solution goes against to the capitalist ideology, which assumes
        that the rich deserve their wealth because they work harder or smarter.
        If you are taxing them at a higher rate, aren’t you discouraging hard
        work and innovation?&nbsp;
      </p>
      <p>
        From a wider perspective, when the tax money goes to fund the social
        programs for the poor, some undeserving lazy people will benefit. So you
        are not just discouraging work, but also proportionally encouraging
        laziness in a way. This chips away at the competitive nature of the
        society. As laziness induced poverty keeps increasing and the
        innovations discouraged, even more taxes will be required. By the
        eventuality of its flawed mechanism, this becomes an addictive
        self-reinforcing cycle until all incomes from workers gets distributed
        to even out the wealth gap, like communism where everyone is poor.
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
        increase competitiveness, it does not address the fundamental mechanism
        by which wealth flows to the richest. Skillful or not, employees could
        still be exploited for profit by the higher up. Or they can themselves
        become exploiters. This may be a bandage, but not the cure.
      </p>
      <p>
        <br />
      </p>
      <p>
        On a side note, the millennials are the most educated generation ever in
        terms of university degrees, and yet the most at risk of unemployment
        compared to the previous generations.&nbsp;
      </p>
      <p>
        <br />
      </p>
      <p>Solution 4: Universal basic income.&nbsp;</p>
      <p>
        This relates a little to the above idea of accessible education. As I
        recall from the 2020 presidential candidate Andrew Yang, the idea is
        that the recipient can now use the extra money to move forward in life,
        such as attending school or change to a better job. This could be a
        short-term fix, but still does not solve the fundamental issue. You may
        have $1000 now to attend night classes, but even your newly acquired
        skills are still replaceable by robots. You have delayed the
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
        First, a fully descriptive name may be, "the fundamental issue posed by
        the capitalistic mechanism". It can be viewed as an equilibrium problem;
        the system we have designed is trying to reach an equilibrium state that
        is unacceptable to us.&nbsp;
      </p>
      <p>
        <br />
      </p>
      <p>
        We know that wealth begets wealth. If you have extra money, you can use
        your wealth to generate more wealth by putting it in stocks, which
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
        Although this is a general business practice, it could be seen as a form
        of exploitation given that he is only pay enough to keep working. And if
        you happen to be invested in this company which keeps growing as result
        of such, your wealth would be made by indirectly exploiting others.
      </p>
      <p>
        <br />
      </p>
      <p>
        This is basically how stock markets really works to the benefit of the
        wealthy, by serving as their safekeep for the money made from
        exploitation. Even during the COVID induced economic downturn, the stock
        prices are getting so bloated that they seem more like a pyramid scheme
        than any reflection of the economy.&nbsp;
      </p>
      <p>
        <br />
      </p>
      <p>
        Despite this, both the president Trump and Biden used the rising stocks
        as proof that they saved the economy. Don’t they know that the stock
        market does not include the entire economy, and that they ignored an
        entire segment of the population? In fact, much of its increase was
        possible by sacrificing a growing economical class of working-poor who
        are not even represented in the stock market. That is, the rising stocks
        themselves are being fueled by the rising wealth gap, as the money from
        the real-life base economy of the poor is being transferred up into the
        stock economy of the rich.&nbsp;
      </p>
      <p>
        <br />
      </p>
      <p>
        To sum up, the one with more resources can continuously acquire more
        resource generating assets, at the expense of the less resourceful. This
        is like a game of "fish eats fish", where the bigger fish grows by
        eating smaller ones.
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
        I understand the good intention behind all the proposed solutions above,
        but the system is not flawed, it is just doing exactly what it is
        designed to do. Does the game of monopoly end when all players are
        satisfied with their financial situation? No, it ends when there is only
        one winner. They might try to keep the game longer by giving out $200
        cash every time a player passes over the starting point, but the game
        still will end eventually.&nbsp;
      </p>
      <p>
        <br />
      </p>
      <p>
        The way I see it, we have started a giant game of monopoly since World
        War 2. Everyone was having fun in the 50s/60s chasing the American
        dream. But now the game is nearing the end, we can make out the winners,
        the trillion-dollar companies like Amazon, Google, or Apple. But what
        about the losers? Within monopoly, they get booted out of the game
        board, but in real life this translate to suffering, and an increase in
        crimes, overdose, and death. The mechanics of capitalism has made us in
        the 20th century, and is about to unmake us in the 21st century, as it
        continues towards its equilibrium state.&nbsp;
      </p>
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>
      <p>Section 3, The impact of the problem:</p>
      <p>
        <br />
      </p>
      <p>
        Now that I have defined the fundamental issue, it’s time to pin down why
        is such an equilibrium unacceptable to us. It is unacceptable simply
        because, the resources are not being shared in an efficient
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
        farmer can buy 10 plows, and the 9 other farmers cannot buy any. While
        plows are necessary to loosen the soil to make produce, a single farmer
        can only operate 1 plow at a time and have no use for the 9 leftover
        plows. The other nine farmers, meanwhile, could really use the plow and
        would get much greater utility from it. In such an unevenly distributed
        economy, the total output would only be equal to that of the one single
        farmer.&nbsp;
      </p>
      <p>
        <br />
      </p>
      <p>
        On the other hand, if the resources are distributed evenly with one plow
        per farmer, then we have achieved the maximum utility. This economy
        would out-produce the previous one by tenfold, as all 10 farmers are
        producing at capacity. Throughout the remainder of the article, I will
        use the term "efficient" to describe such an economy. So in the context
        of this article, whenever I mention "efficient", &nbsp;“efficiently”, or
        “efficiency”, I am referring to this state of wealth distribution where
        the marginal utility of return is maximized for everyone. Likewise, when
        I mention the word “sustainable”, it means that the state is moving
        towards efficiency, not away from it.&nbsp;
      </p>
      <p>
        <br />
      </p>
      <p>
        And that is just the economic aspect of it, the human aspect would be
        that the nine farmers, if not given the plow, would not be able to earn
        a living and thus suffer.&nbsp;
      </p>
      <p>
        <br />
      </p>
      <p>
        So there you have it, we have come down to the underlying issue. Every
        time we talk about the wealth disparity, we are essentially referring to
        the problem of misallocation of resources. It is very important to see
        the problem this way, as it will be the basis from which I will form my
        solution.&nbsp;
      </p>
      <p>
        <br />
      </p>
    </div>
  );
}

export default Text;
