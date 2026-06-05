// Long list of questions - used by index.html
const long_list_of_questions =
[
// Array of steps. Each step contains a question for the user
// Each step also contains how to handle the user's response
	// {
	// 	"id": "",
	// 	"prompt": "",
	// 	"hint": "",
	// 	"response": "",
	// 	"response_handler": "",
	// 	"result_tag": "",
	// },
	{
		"id": "welcome",
		"prompt": "<h5><em>ExamineYourThoughts.com</em></h5>Welcome! This guided worksheet will help you examine a stressful thought, one question at a time.",
		"hint": "Are you upset, angry, unmotivated, sad, anxious, or worried about something?<br/>These questions will help you see your situation more clearly.<br/><br/><em>(Click Button or Press Enter to submit)</em><br/><br/><i>This is the full version with all questions. A shorter version is also available.</i>",
		"response": "",
		"response_handler": "handle_initial_response",
		"result_tag": ""
	},
	{
		"id": "noun",
		"prompt": "What is the noun (person, thing, or event) that is causing you stress?",
		"hint": "Examples: 'My boss', 'My roommate', 'My girlfriend', 'My project', 'My chore', 'My future', 'My career'",
		"response": "",
		"response_handler": "save_noun_response",
		"result_tag": "The Thing"
	},
	{
		"id": "premeasure",
		"prompt": "How upsetting is '#{NOUN}' to you?",
		"hint": "On a scale of 1-10, (10 is extremely upsetting, 1 is only a tiny bit upsetting)",
		"response": "",
		"response_handler": "",
		"result_tag": "How upset"
	},
	{
		"id": "feel",
		"prompt": "How do you feel when you think about '#{NOUN}'?",
		"hint": "Examples: hopeless, overwhelmed, depressed, tired, bored, distracted, intimidated, frustrated, angry, scared, unmotivated, uninterested, uninspired, upset, challenged, stressed, anxious, reluctant, lazy, hesitant, lethargic, avoidant, averse, jealous, etc.",
		"response": "",
		"response_handler": "save_feeling_response",
		"result_tag": "The Feeling"
	},
	{
		"id": "thought",
		"prompt": "Write out the exact stressful thought you're having about '#{NOUN}'",
		"hint": "'#{NOUN}' is making me feel '#{FEELING}' because ________ .",
		"response": "",
		"response_handler": "save_thought_response",
		"result_tag": "Stressful thought"
	},
	{
		"id": "true",
		"prompt": "'#{THOUGHT}' ...Is it true?<sup><em>*</em></sup>",
		"hint": "Be honest! It's OK to say <em>Yes</em> if you feel it is true to you right now. It doesn't matter if you say <em>Yes</em> or <em>No</em>.",
		"response": "",
		"response_handler": "",
		"result_tag": "True"
	},
	{
		"id": "absolutely",
		"prompt": "'#{THOUGHT}' ...Can you absolutely be sure it is true?<sup><em>*</em></sup>",
		"hint": "Can you prove that it's true? Is it <em>even possible</em> to prove? Why or why not? Note: it's perfectly fine to say Yes.",
		"response": "",
		"response_handler": "",
		"result_tag": "Absolutely true"
	},
	{
		"id": "react",
		"prompt": "How do you react when you believe '#{THOUGHT}'?<sup><em>*</em></sup>",
		"hint": "What do you do? What actions do you take? How do you feel?<br/>Examples: I get scared, I procrastinate, I wish..., I avoid dealing with it or thinking about it",
		"response": "",
		"response_handler": "",
		"result_tag": "Reaction"
	},
	{
		"id": "without",
		"prompt": "Who would you be if you didn't believe the thought '#{THOUGHT}'?<sup><em>*</em></sup>",
		"hint": "Without the thought, what would you be doing? What action would you take? How would you feel? How would you treat the situation differently? (This is one of my favorite steps.)",
		"response": "",
		"response_handler": "",
		"result_tag": "Without"
	},
	{
		"id":"evidencefor",
		"prompt":"What is the evidence FOR your negative thought?",
		"hint":"",
		"response": "",
		"response_handler": "",
		"result_tag":"Evidence?"
	},
	{
		"id":"evidenceAgainst",
		"prompt":"What is the evidence AGAINST your negative thought?",
		"hint":"",
		"response": "",
		"response_handler": "",
		"result_tag":"Against?"
	},
	{
		"id": "turnaround",
		"prompt": "What are some of the turnarounds?<sup><em>*</em></sup> (for '#{THOUGHT}')",
		"hint": "A turnaround is where you rephrase the thought toward yourself or towards the opposite in a way that you believe is more true",
		"response": "",
		"response_handler": "",
		"result_tag": "Turnarounds"
	},
	{
		"id": "coach",
		"prompt": "What would a kind, honest, and wise coach say to me right now?",
		"hint": "Imagine you hired a coach that is incredibly kind, honest, caring, thoughtful, intelligent, wise, and experienced.",
		"response": "",
		"response_handler": "",
		"result_tag": "Coach",
	},
	{
		"id": "kind_of_person",
		"prompt": "With regard to '#{NOUN}', what kind of person do you want to be?",
		"hint": "How do you want other people to think of you? How do you want to be remembered? What would your role model do? What are you rooting for yourself to do? (My other favorite question!)",
		"response": "",
		"response_handler": "",
		"result_tag": "Kind of Person"
	},
	{
		"id": "child",
		"prompt": "Imagine you had a child in this exact same situation, what would you want them to do with regards to this situation?",
		"hint": "What advice would you give a child? How would you comfort them? Does that advice apply to you too?",
		"response": "",
		"response_handler": "",
		"result_tag": "Child"
	},
	{
		"id": "youngerself",
		"prompt": "Would you say '#{THOUGHT}' to your younger self?",
		"hint": "Why or why not? What about to your older self? To your present self?",
		"response": "",
		"response_handler": "",
		"result_tag": "Younger Self"
	},
	{
		"id": "what_to_say_to_friend",
		"prompt": "What would you say to a friend of yours in a similar situation?",
		"hint": "What encouragement, advice, or comfort would you offer them? Can you say that to yourself?",
		"response": "",
		"response_handler": "",
		"result_tag": "Msg to Friend"
	},
	{
		"id": "would_you_say_to_friend",
		"prompt": "Would you ever say '#{THOUGHT}' to a friend in a similar situation?",
		"hint": "Why or why not? Would it be rude, mean, discouraging, untruthful, unhelpful, or unfriendly?",
		"response": "",
		"response_handler": "",
		"result_tag": "Friend"
	},
	{
		"id": "fullStory",
		"prompt": "Suppose that '#{THOUGHT}' is true.... what is the rest of the story? What's the full story? What else is true about #{NOUN}?",
		"hint": "Is there another side to this story? Is there another half of the story? Is there a part you're not focusing on? What are you leaving out, forgetting, or missing?",
		"response": "",
		"response_handler": "",
		"result_tag": "Full Story"
	},
	{
		"id": "helpful",
		"prompt": "Is the thought '#{THOUGHT}' helping you, keeping you stuck, or hurting you?",
		"hint": "Explain how. Even if the thought ontains some truth, is believing it actually making things better?",
		"response": "",
		"response_handler": "",
		"result_tag": "Helpful"
	},
	{
		"id": "fiveMinutes",
		"prompt": "Spend five minutes taking small steps to improve the situation regarding #{NOUN}. What did you do during those 5 minutes and how did it go?",
		"hint": "Set a timer for five minutes. Take any small action. Come back and describe what you did and how it sent.",
		"response": "",
		"response_handler": "",
		"result_tag": "5 minutes"
	},
	{
		"id": "cost",
		"prompt": "What has believing '#{THOUGHT}' cost you?",
		"hint": "Consider costs to your time, energy, relationships, opportunities. Consider costs in the past, present, and future.",
		"response": "",
		"response_handler": "",
		"result_tag": "Cost"
	},
	{
		"id": "Hurry",
		"prompt": "How could you improve this situation in a hurry?",
		"hint": "Imagine you only had one hour. Maybe you would be better off getting something done quickly rather than perfectly.",
		"response": "",
		"response_handler": "",
		"result_tag": "Hurry"
	},
	{
		"id": "positive_character",
		"prompt": "Does the fact that you're bothered by this thought say anything positive about your character? '#{THOUGHT}'",
		"hint": "What do you like about yourself that is reflected in this thought/belief? What does this thought reveal about your values?",
		"response": "",
		"response_handler": "",
		"result_tag": "Positive",
	},
	{
		"id": "knowledge",
		"prompt": "What knowledge or skills could help you with this situation? '#{THOUGHT}'",
		"hint": "How could you become more knowledgeable or skillful? Are there mentors, teachers, coaches, friends, guides that you could learn from? What knowledge are you missing? You don't even know what you don't know!",
		"response": "",
		"response_handler": "",
		"result_tag": "Knowledge",
	},
	{
		"id": "Strategy",
		"prompt": "How could you switch up your strategy with regard to the subject? '#{THOUGHT}'",
		"hint": "What strategies could you try that you haven't tried yet? Don't be afraid to brainstorm and take bold action.",
		"response": "",
		"response_handler": "",
		"result_tag": "Strategy",
	},
	{
		"id": "empathize",
		"prompt": "Imagine someone else had this thought. How could you empathize with them? '#{THOUGHT}'",
		"hint": "The more completely can empathize with them, the better. Tell them that you realize how miserable their situation is.",
		"response": "",
		"response_handler": "",
		"result_tag": "Empathize",
	},
	{
		"id": "fan",
		"prompt": "Imagine that someone is a huge fan of yours and is rooting for you to succeed. If they knew you were thinking '#{THOUGHT}', what would they want you TO DO? What is their point of view of your situation?",
		"hint": "You could imagine a friend, a family member, a coach, a mentor, or a role model. It doesn't have to be a real person, it could be an entirely made-up person.",
		"response": "",
		"response_handler": "",
		"result_tag": "Fan"
	},
	{
		"id": "other_to_do",
		"prompt": "If SOMEONE ELSE was thinking '#{THOUGHT}', what would you want them TO DO?",
		"hint": "Imagine someone else was in this situation. What would you hope they do? Or root for them to do?",
		"response": "",
		"response_handler": "",
		"result_tag": "Other To Do"
	},
	{
		"id": "otheradvice",
		"prompt": "If SOMEONE ELSE was thinking '#{THOUGHT}', what advice would you give them?",
		"hint": "Imagine someone else was in this situation and going to you for help. What would you say to them?",
		"response": "",
		"response_handler": "",
		"result_tag": "Other Advice"
	},
	{
		"id": "you_can",
		"prompt": "What is something that YOU CAN DO that would help you feel better about '#{NOUN}'?",
		"hint": "Focus in on what you can control or do, rather than things that rely on other people doing something.",
		"response": "",
		"response_handler": "",
		"result_tag": "You can"
	},
	{
		"id": "selfadvice",
		"prompt": "What advice would you give yourself regarding '#{NOUN}' and the thought '#{THOUGHT}'?",
		"hint": "Imagine talking to yourself and giving yourself advice.",
		"response": "",
		"response_handler": "",
		"result_tag": "Advice to Self"
	},
	{
		"id": "respond_to_other_negativity",
		"prompt": "Imagine that the thought was being said by a bully. Imagine that someone else believed that your Negative Thought was true for you. They heard your negative thought and they agreed with it. Now they are saying it to you. How would you respond to their negativity (or their criticism)?",
		"hint": "Imagine another person believes your negative thought about you and your situation, not necessarily about their own situation. If your thought contains a first-person perspective, you will need to re-write the negative thought from someone else's perspective about you. For example, if your negative thought was 'It will be difficult and I will be miserable' then the other person saying it towards you would be: 'It will be difficult and you will be miserable.' How could you respond? Your thought: '#{THOUGHT}'",
		"response": "",
		"response_handler": "",
		"result_tag": "Respond to Negativity"
	},
	{
		"id": "worst",
		"prompt": "Could you handle the WORST imaginable future regarding '#{NOUN}'?",
		"hint": "Suppose everything goes horribly. The worst possible outcomes happen at every possible juncture. Could you handle it?",
		"response": "",
		"response_handler": "",
		"result_tag": "Worst"
	},
	{
		"id": "detailed_plan",
		"prompt": "Write out an extremely detailed plan for dealing with '#{NOUN}'",
		"hint": "Define lots of little objectives. Break every step down into lots of smaller steps. Be as detailed as possible. Focus on specific actions that need to be taken.",
		"response": "",
		"response_handler": "",
		"result_tag": "Plan"
	},
	{
		"id": "leave_me_alone",
		"prompt": "Talk back to the negative thoughts. Tell the negative thoughts and negative part of your brain to be quiet! And to leave you alone!",
		"hint": "Tell it to shut up and leave you alone. Tell it to leave you in peace so you can focus on improving the situation. Tell it that it's making things worse by distracting you and that you're sick of it.",
		"response": "",
		"response_handler": "",
		"result_tag": "Leave me alone"
	},
	{
		"id": "thanks",
		"prompt": "Thank the negative thought for its concern and caution.",
		"hint": "Tell the negative part of your brain that you're thankful for it. You understand it's trying to help and protect you. That you understand it's coming from a place of caring and it's trying to help motivate you. That you appreciate its concern.",
		"response": "",
		"response_handler": "",
		"result_tag": "Thanks"
	},
	{
		"id": "drop",
		"prompt": "Can you see a good reason to stop believing the thought '#{THOUGHT}'?<sup><em>*</em></sup>",
		"hint": "What is that reason?",
		"response": "",
		"response_handler": "",
		"result_tag": "Drop thought"
	},
	{
		"id": "gratitude",
		"prompt": "What are you grateful for with regard to '#{NOUN}'?",
		"hint": "",
		"response": "",
		"response_handler": "",
		"result_tag": "Gratitude"
	},
	{
		"id": "black-or-white",
		"prompt": "Is it an example of black-or-white when thinking in shades of grey would be more appropriate? '#{THOUGHT}'",
		"hint": "Try re-writing your negative thought to be more accurate by describing things on a scale of 0 to 100",
		"response": "",
		"response_handler": "",
		"result_tag": "Black or white"
	},
	{
		"id": "assumptions",
		"prompt": "What assumptions are present? Predicting the future? Trying to read someone's mind? Assuming the worst? '#{THOUGHT}'",
		"hint": "",
		"response": "",
		"response_handler": "",
		"result_tag": "Assumptions"
	},
	{
		"id": "labeling",
		"prompt": "Is it an example of labeling or mislabeling? '#{THOUGHT}'",
		"hint": "How do you define those labels?",
		"response": "",
		"response_handler": "",
		"result_tag": "Labeling"
	},
	{
		"id": "overgeneralization",
		"prompt": "What overgeneralizations are present? '#{THOUGHT}'",
		"hint": "For example, generalizing about the future based on the past. Or generalizing about a large group based on a small subset.",
		"response": "",
		"response_handler": "",
		"result_tag": "Overgeneralization"
	},
	{
		"id": "out_of_proportion",
		"prompt": "Is it an example of blowing things out of proportion? '#{THOUGHT}'",
		"hint": "For example, does it make something seem more important or bigger than it actually is?",
		"response": "",
		"response_handler": "",
		"result_tag": "Out of Proportion"
	},
	{
		"id": "minimizing",
		"prompt": "Is it an example of downplaying, minimizing, or ignoring anything? Does it disqualify, disregard, or discount anything? '#{THOUGHT}'",
		"hint": "For example, does it make anything seem unimportant, such as your accomplishments?",
		"response": "",
		"response_handler": "",
		"result_tag": "Minimizing"
	},
	{
		"id": "filtering",
		"prompt": "Is it an example of filtering? Are you filtering out anything? Something positive? Something negative? '#{THOUGHT}'",
		"hint": "For example, you're so focused on all of the things that they do wrong that you filter out the things they do correct.",
		"response": "",
		"response_handler": "",
		"result_tag": "Filtering"
	},
	{
		"id": "distortions",
		"prompt": "What cognitive distortions are present in your beliefs about '#{NOUN}'?",
		"hint": "How might you be exaggerating? Overestimating? Underestimating? Too focused? Predicting? Labeling? Mind-reading? Assuming? Personalizing? Shoulding? Magnifying? Minifying? Over-generalizing? Filtering? Ignoring the positive? Ignoring nuance?",
		"response": "",
		"response_handler": "",
		"result_tag": "Distortions"
	},
	{
		"id": "treat",
		"prompt": "How do you treat '#{NOUN}' when you think '#{THOUGHT}'?<sup><em>*</em></sup> How do you behave?",
		"hint": "And how do you treat yourself?",
		"response": "",
		"response_handler": "",
		"result_tag": "Behavior with"
	},
		{
		"id": "treat_without",
		"prompt": "How would you treat '#{NOUN}' WITHOUT the thought '#{THOUGHT}'?<sup><em>*</em></sup> How would you behave?",
		"hint": "How would you treat yourself WITHOUT this thought?",
		"response": "",
		"response_handler": "",
		"result_tag": "Behavior without"
	},
	{
		"id": "envision",
		"prompt": "What do you see, envision, or imagine when you believe '#{THOUGHT}'?<sup><em>*</em></sup>",
		"hint": "",
		"response": "",
		"response_handler": "",
		"result_tag": "Envision"
	},
	{
		"id": "envision_without",
		"prompt": "What do you see or imagine it would be like if you could let go of the thought '#{THOUGHT}'?",
		"hint": "",
		"response": "",
		"response_handler": "",
		"result_tag": "Envision without"
	},
	{
		"id":"why",
		"prompt": "Why do you think '#{NOUN}' is the way it currently is?",
		"hint": "Can you give an explanation?",
		"response": "",
		"response_handler": "",
		"result_tag": "Why"
	},
	{
		"id": "keep",
		"prompt": "Can you see a STRESS-FREE reason to keep believing the thought '#{THOUGHT}'?<sup><em>*</em></sup>",
		"hint": "What is that reason?",
		"response": "",
		"response_handler": "",
		"result_tag": "Keep thought"
	},
	{
		"id": "business",
		"prompt": "Whose business is it?<sup><em>*</em></sup>",
		"hint": "Yours? Someone else's? The universe's?",
		"response": "",
		"response_handler": "",
		"result_tag": "Business"
	},
	{
		"id": "bother",
		"prompt": "Why does '#{NOUN}' bother or upset you so much?",
		"hint": "Is there a self-doubt or limiting belief related to it? Is there an emotional wound?",
		"response": "",
		"response_handler": "",
		"result_tag": "Bothers me"
	},
	{
		"id":"bothers_you_more",
		"prompt": "What is bothering you more right now, '#{NOUN}' or your thinking?",
		"hint": "Your thoughts, beliefs, feelings, emotions regarding it",
		"response": "",
		"result_tag": "Problem"
	},
	{
		"id": "turnaround_opposite",
		"prompt": "How can you turn the thought around to the OPPOSITE?<sup><em>*</em></sup>",
		"hint": "Instead of ABC is/does XYZ, how is the opposite true? ABC is/does NOT XYZ. What is the counter-evidence? ('#{THOUGHT}')",
		"response": "",
		"response_handler":"",
		"result_tag":"Turnaround (opposite)"
	},
	{
		"id": "turnaround_self",
		"prompt": "How can you turn the thought around to YOURSELF?<sup><em>*</em></sup>",
		"hint": "Instead of ABC does XYZ, how do YOU do XYZ? ('#{THOUGHT}')",
		"response": "",
		"response_handler":"",
		"result_tag":"Turnaround (self)"
	},
	{
		"id": "turnaround_other",
		"prompt": "How can you turn the thought around the OTHER WAY?<sup><em>*</em></sup>",
		"hint": "Instead of ABC does XYZ to me, how do YOU do XYZ to ABC? Or turnaround to the present? ('#{THOUGHT}')",
		"response": "",
		"response_handler":"",
		"result_tag":"Turnaround (other)"
	},
	{
		"id": "turnaround_thinking",
		"prompt": "How can you turn the thought around to YOUR THINKING?<sup><em>*</em></sup>",
		"hint": "Instead of ABC does XYZ, how is your thinking XYZ? ('#{THOUGHT}')",
		"response": "",
		"response_handler":"",
		"result_tag":"Turnaround (thinking)"
	},
	{
		"id": "rewrite",
		"prompt": "Rewrite the thought '#{THOUGHT}' in a way that is more true or more helpful.",
		"hint": "Try to be as true, accurate, helpful, and kind as possible. Try to be 100% truthful.",
		"response": "",
		"response_handler": "",
		"result_tag": "Rewrite"
	},
	{
		"id": "values",
		"prompt": "What value or values do you want to stand for in this situation?",
		"hint": "",
		"response": "",
		"response_handler": "",
		"result_tag": "Values",
	},
	{
		"id": "emotions",
		"prompt": "Which emotions are you least willing to feel in this situation?",
		"hint": "",
		"response": "",
		"response_handler": "",
		"result_tag":"emotions_avoid"
	},
	{
		"id": "belief_amount",
		"prompt": "Imagine you could decrease how much you believe the thought without completely removing ALL of your belief in the thought. How would that change your behavior and feelings?",
		"hint": "Believing a negative thought can sometimes have some subtle benefits or positive side effects. For example, believing that something is going to be time-consuming can help you schedule it properly. Instead of trying to reduce your belief completely, it may be best to try to decrease your belief in the thought. Without completely removing your belief in the thought.",
		"response": "",
		"response_handler": "",
		"result_tag": "Belief amount",
	},
	{
		"id": "Become",
		"prompt": "Who do you become when you believe the negative thought?",
		"hint": "What type of person do you become?",
		"response": "",
		"response_handler": "",
		"result_tag": "Become",
	},
	{
		"id": "new_thought",
		"prompt": "What is the new thought that I want to practice?",
		"hint": "Who do you become when you believe the new thought?",
		"response": "",
		"response_handler": "",
		"result_tag": "New Thought",
	},
	{
		"id": "tiny_next_step",
		"prompt": "What is the smallest next step you could take in a positive direction?",
		"hint": "",
		"response": "",
		"response_handler": "",
		"result_tag": "Tiny Next Step",
	},
	{
		"id": "trigger",
		"prompt": "What could trigger this negative thought to occur again in the future?",
		"hint": "",
		"response": "",
		"response_handler": "",
		"result_tag": "Trigger",
	},
	{
		"id": "experiment",
		"prompt": "Describe a small experiment that you could try during the next 24 hours that would be helpful in this situation?",
		"hint": "",
		"response": "",
		"response_handler": "",
		"result_tag": "Experiment",
	},
	{
		"id": "inner_critic",
		"prompt": "What does your inner critic say? What does your wiser voice say back?",
		"hint": "",
		"response": "",
		"response_handler": "",
		"result_tag": "Inner Critic/Wiser Self",
	},
	{
		"id": "why_not_100",
		"prompt": "Write one to three reasons why the negative statement is not 100% true.",
		"hint": "If the negative thought is 100% true, skip this question.",
		"response": "",
		"response_handler": "",
		"result_tag": "WhyNot100",
	},
	{
		"id": "best_advice",
		"prompt": "What's the absolute best advice you can give yourself in this situation?",
		"hint": "",
		"response": "",
		"response_handler": "",
		"result_tag": "Best Advice",
	},
	{
		"id": "future_imagine",
		"prompt": "Imagine it is ten years in the future and you are looking back to right now. What does your future self wish you had done right now?",
		"hint": "",
		"response": "",
		"response_handler": "",
		"result_tag": "Future",
	},
	{
		"id": "best_question",
		"prompt": "Which question in this worksheet helped you the most?",
		"hint": "Which question was the most beneficial for you?",
		"response": "",
		"response_handler": "",
		"result_tag": "Best question",
	},
	{
		"id": "postmeasure",
		"prompt": "How upsetting is '#{NOUN}' to you now?",
		"hint": "On a scale of 1-10, (10 is extremely upsetting, 1 is only a tiny bit upsetting)",
		"response": "",
		"response_handler": "",
		"result_tag":"How upset after"
	},
	{
		"id": "now",
		"prompt": "How do you feel now? Describe it.",
		"hint": "",
		"response": "",
		"response_handler": "",
		"result_tag": "Feeling after"
	},
	{
		"id": "next",
		"prompt": "What's another thought you could examine next? What belief led you to believe this one?",
		"hint": "What other thoughts should you examine next?",
		"response": "",
		"response_handler": "",
		"result_tag": "Next"
	},
	{
		"id": "worthwhile",
		"prompt": "Was using ExamineYourThoughts.com a good use of your time?",
		"hint": "Or was it a waste of time? On a scale of 0-10, where 0 is waste of time and 10 is an amazing use of your time, how worthwhile was it? Explain why",
		"response": "",
		"response_handler": "",
		"result_tag": "Worthwhile"
	},
	{
		"id": "end",
		"prompt": "The End",
		"hint": "I hope this thinking exercise helped you feel a little better.<br/><em>Refresh this page or hit the Restart button below to try it again.</em>",
		"response":"",
		"response_handler": "",
		"result_tag": ""
	}
];
