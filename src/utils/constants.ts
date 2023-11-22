import moment from 'moment';

export const userList = [
  {
    id: '1',
    user: {
      id: 'u2',
      name: 'Lukas',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg',
      status: 'Hey there!',
    },
    lastMessage: {
      id: 'm1',
      text: 'Well done this sprint, guys!',
      createdAt: '2023-11-22T13:30:00.000Z',
    },
  },
  {
    id: '2',
    user: {
      id: 'u3',
      name: 'Daniil Top',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    },
    lastMessage: {
      id: 'm2',
      text: "How are you doing? Did you get any chance to look at what I've sent you?",
      createdAt: '2023-11-22T10:48:00.000Z',
    },
  },
  {
    id: '3',
    user: {
      id: 'u4',
      name: 'Alex',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/8.png',
    },
    lastMessage: {
      id: 'm3',
      text: 'Hi, Vadim. I hope the plans for to night are still on.',
      createdAt: '2022-10-13T20:48:00.000Z',
    },
  },
  {
    id: '4',
    user: {
      id: 'u5',
      name: 'Vlad',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg',
    },
    lastMessage: {
      id: 'm4',
      text: 'Could you please review my last merge?',
      createdAt: '2022-10-12T14:48:00.000Z',
    },
  },
  {
    id: '5',
    user: {
      id: 'u6',
      name: 'Elon Musk',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
    },
    lastMessage: {
      id: 'm5',
      text: 'I would be happy meeting you',
      createdAt: '2022-10-11T14:48:00.000Z',
    },
  },
  {
    id: '6',
    user: {
      id: 'u7',
      name: 'Adrian',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/graham.jpg',
    },
    lastMessage: {
      id: 'm6',
      text: 'I think I have a solution for tha.',
      createdAt: '2022-10-10T14:48:00.000Z',
    },
  },
  {
    id: '7',
    user: {
      id: 'u8',
      name: 'Borja',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg',
    },
    lastMessage: {
      id: 'm7',
      text: 'How are you doing?',
      createdAt: '2022-10-09T14:30:00.000Z',
    },
  },
  {
    id: '8',
    user: {
      id: 'u9',
      name: 'Mom',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/7.png',
    },
    lastMessage: {
      id: 'm8',
      text: 'Dear, what did you eat, today?',
      createdAt: '2020-09-27T15:40:00.000Z',
    },
  },
  {
    id: '9',
    user: {
      id: 'u9',
      name: 'Andrei',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg',
    },
    lastMessage: {
      id: 'm8',
      text: 'What about our podcast?',
      createdAt: '2020-09-27T15:40:00.000Z',
    },
  },
  {
    id: '10',
    user: {
      id: 'u9',
      name: 'Misha',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/biahaze.jpg',
    },
    lastMessage: {
      id: 'm8',
      text: 'Do I have to send you any more details?',
      createdAt: '2020-09-27T15:40:00.000Z',
    },
  },
  {
    id: '11',
    user: {
      id: 'u9',
      name: 'Alina',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/7.png',
    },
    lastMessage: {
      id: 'm8',
      text: 'Here is a picture of Mark.',
      createdAt: '2020-09-27T15:40:00.000Z',
    },
  },
  {
    id: '12',
    user: {
      id: 'u10',
      name: 'Sophie',
      image: '',
    },
    lastMessage: {
      id: 'm9',
      text: 'Are you free for a call later?',
      createdAt: '2022-10-08T17:30:00.000Z',
    },
  },
  {
    id: '13',
    user: {
      id: 'u11',
      name: 'Elena',
      image: '',
    },
    lastMessage: {
      id: 'm10',
      text: 'What do you think about the new project proposal?',
      createdAt: '2022-10-07T11:15:00.000Z',
    },
  },
  {
    id: '14',
    user: {
      id: 'u12',
      name: 'Tom',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
    },
    lastMessage: {
      id: 'm11',
      text: 'Just finished reading that book you recommended!',
      createdAt: '2022-10-06T19:20:00.000Z',
    },
  },
  {
    id: '15',
    user: {
      id: 'u13',
      name: 'Natalie',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/5.jpg',
    },
    lastMessage: {
      id: 'm12',
      text: 'Have you tried the new restaurant downtown?',
      createdAt: '2022-10-05T14:50:00.000Z',
    },
  },
  {
    id: '16',
    user: {
      id: 'u14',
      name: 'Grace',
      image: '',
    },
    lastMessage: {
      id: 'm13',
      text: "Let's catch up over coffee this weekend!",
      createdAt: '2022-10-04T09:45:00.000Z',
    },
  },
  {
    id: '17',
    user: {
      id: 'u15',
      name: 'John',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/7.png',
    },
    lastMessage: {
      id: 'm14',
      text: 'Do you have any plans for the holidays?',
      createdAt: '2022-10-03T16:30:00.000Z',
    },
  },
  {
    id: '18',
    user: {
      id: 'u16',
      name: 'Emma',
      image: '',
    },
    lastMessage: {
      id: 'm15',
      text: "I heard you're working on a new project. Exciting!",
      createdAt: '2022-10-02T22:10:00.000Z',
    },
  },
  {
    id: '19',
    user: {
      id: 'u17',
      name: 'Jake',
      image: '',
    },
    lastMessage: {
      id: 'm16',
      text: 'Let me know if you need help with anything.',
      createdAt: '2022-10-01T11:20:00.000Z',
    },
  },
  {
    id: '20',
    user: {
      id: 'u18',
      name: 'Olivia',
      image: '',
    },
    lastMessage: {
      id: 'm17',
      text: "I hope you're having a great day!",
      createdAt: '2022-09-30T14:15:00.000Z',
    },
  },
];

export const massages = [
  {
    id: 'm1',
    text: 'How are you, Lukas! I shoudl be the latest message',
    createdAt: '2023-11-22T12:48:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  },
  {
    id: 'm2',
    text: 'I am good, good',
    createdAt: '2023-11-22T14:49:00.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  },
  {
    id: 'm3',
    text: 'What about you?',
    createdAt: '2023-11-22T14:49:40.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  },
  {
    id: 'm4',
    text: 'Good as well, preparing for the stream now.',
    createdAt: '2023-11-22T14:50:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  },
  {
    id: 'm5',
    text: 'How is your uni going?',
    createdAt: '2023-11-22T14:51:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  },
  {
    id: 'm6',
    text: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
    createdAt: '2023-11-22T14:49:00.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  },
  {
    id: 'm7',
    text: 'Big Data is really interesting. Cannot wait to go through all the material.',
    createdAt: '2023-11-22T14:53:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  },
  {
    id: 'm8',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    createdAt: '2023-11-22T14:53:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  },
  {
    id: 'm9',
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    createdAt: '2023-11-22T14:53:00.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  },
  {
    id: 'm10',
    text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in',
    createdAt: '2023-11-22T14:53:00.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  },
  {
    id: 'm11',
    text: 'Ok.',
    createdAt: '2023-11-22T14:53:00.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  },
  {
    id: 'm12',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    createdAt: '2023-11-22T14:53:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  },
  {
    id: 'm13',
    text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in',
    createdAt: '2023-11-22T14:53:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  },
  {
    id: 'm14',
    text: 'Hey Vadim, do you have any tips for preparing for the stream?',
    createdAt: '2023-11-22T15:30:00.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  },
  {
    id: 'm15',
    text: 'Absolutely, Lukas! Make sure to have a clear outline, engage with your audience, and have some fun topics to discuss.',
    createdAt: '2023-11-22T15:32:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  },
  {
    id: 'm16',
    text: 'Thanks, Vadim! I appreciate the advice.',
    createdAt: '2023-11-22T15:34:00.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  },
  {
    id: 'm17',
    text: 'No problem, Lukas! Good luck with your stream!',
    createdAt: '2023-11-22T15:36:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  },
  {
    id: 'm18',
    text: 'Hey, have you guys tried the new coding challenge on the platform?',
    createdAt: '2023-11-22T15:40:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  },
  {
    id: 'm19',
    text: 'Not yet, Vadim. Is it a tough one?',
    createdAt: '2023-11-22T15:42:00.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  },
  {
    id: 'm20',
    text: "Yeah, it's challenging but interesting. Give it a shot!",
    createdAt: '2023-11-22T15:44:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  },
  {
    id: 'm21',
    text: 'I just finished reading a great book. Anyone looking for recommendations?',
    createdAt: '2023-11-22T15:50:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  },
  {
    id: 'm22',
    text: "Sure, Vadim! What's the book?",
    createdAt: '2023-11-22T15:52:00.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  },
  {
    id: 'm23',
    text: "It's called 'The Innovators' by Walter Isaacson. A fascinating read on the history of technology.",
    createdAt: '2023-11-22T15:54:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  },
  {
    id: 'm24',
    text: "Thanks for the recommendation, Vadim. I'll add it to my list!",
    createdAt: '2023-11-22T15:56:00.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  },
  {
    id: 'm25',
    text: 'Hey, any plans for the weekend?',
    createdAt: '2023-11-22T16:00:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  },
  {
    id: 'm26',
    text: 'Not yet, Vadim. What do you suggest?',
    createdAt: '2023-11-22T16:02:00.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  },
  {
    id: 'm27',
    text: 'How about a hiking trip? The weather should be great!',
    createdAt: '2023-11-22T16:04:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  },
  {
    id: 'm28',
    text: "Sounds good, Vadim! Let's plan it.",
    createdAt: '2023-11-22T16:06:00.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  },
  {
    id: 'm29',
    text: "I'm up for a hiking trip too! Count me in.",
    createdAt: '2023-11-22T16:08:00.000Z',
    user: {
      id: 'u3',
      name: 'Eva',
    },
  },
  {
    id: 'm30',
    text: "Great! It's a plan then. Looking forward to the weekend.",
    createdAt: '2023-11-22T16:10:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  },
  {
    id: 'm31',
    text: "What's everyone's favorite coding language?",
    createdAt: '2023-11-22T16:15:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  },
  {
    id: 'm32',
    text: "I love Python! It's so versatile.",
    createdAt: '2023-11-22T16:17:00.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  },
  {
    id: 'm33',
    text: "Java is my go-to language. It's powerful and widely used.",
    createdAt: '2023-11-22T16:19:00.000Z',
    user: {
      id: 'u3',
      name: 'Eva',
    },
  },
  {
    id: 'm34',
    text: 'I enjoy working with JavaScript for web development.',
    createdAt: '2023-11-22T16:21:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  },
  {
    id: 'm35',
    text: 'C++ is my favorite for performance-oriented tasks.',
    createdAt: '2023-11-22T16:23:00.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  },
  {
    id: 'm36',
    text: 'I like using Ruby for its elegant syntax.',
    createdAt: '2023-11-22T16:25:00.000Z',
    user: {
      id: 'u3',
      name: 'Eva',
    },
  },
  {
    id: 'm37',
    text: 'Anyone here into machine learning?',
    createdAt: '2023-11-22T16:30:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  },
  {
    id: 'm38',
    text: 'Yes, Vadim! I find machine learning fascinating.',
    createdAt: '2023-11-22T16:32:00.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  },
  {
    id: 'm39',
    text: "I'm just getting started with it. Any recommendations for beginners?",
    createdAt: '2023-11-22T16:34:00.000Z',
    user: {
      id: 'u3',
      name: 'Eva',
    },
  },
  {
    id: 'm40',
    text: 'You might want to try the "Introduction to Machine Learning" course on Coursera by Andrew Ng.',
    createdAt: '2023-11-22T16:36:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  },
  {
    id: 'm41',
    text: "Thanks, Vadim! I'll check it out.",
    createdAt: '2023-11-22T16:38:00.000Z',
    user: {
      id: 'u3',
      name: 'Eva',
    },
  },
  {
    id: 'm42',
    text: 'Do you all prefer working in a team or solo?',
    createdAt: '2023-11-22T16:40:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  },
  {
    id: 'm43',
    text: 'I enjoy the collaborative aspect of teamwork.',
    createdAt: '2023-11-22T16:42:00.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  },
  {
    id: 'm44',
    text: 'Solo work allows me to focus better on tasks.',
    createdAt: '2023-11-22T16:44:00.000Z',
    user: {
      id: 'u3',
      name: 'Eva',
    },
  },
  {
    id: 'm45',
    text: 'I like a mix of both. It depends on the project.',
    createdAt: '2023-11-22T16:46:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  },
  {
    id: 'm46',
    text: 'Agreed! Flexibility is key.',
    createdAt: '2023-11-22T16:48:00.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  },
  {
    id: 'm47',
    text: "What's your favorite coding environment?",
    createdAt: '2023-11-22T16:50:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  },
  {
    id: 'm48',
    text: "I love using VS Code. It's lightweight and has great extensions.",
    createdAt: '2023-11-22T16:52:00.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  },
  {
    id: 'm49',
    text: "I'm a fan of IntelliJ IDEA for Java development.",
    createdAt: '2023-11-22T16:54:00.000Z',
    user: {
      id: 'u3',
      name: 'Eva',
    },
  },
  {
    id: 'm50',
    text: 'Sublime Text is my go-to for its speed and simplicity.',
    createdAt: '2023-11-22T16:56:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  },
];

export const formatTime = (time: Date): string => {
  return moment(time).fromNow();
};
