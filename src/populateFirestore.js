import admin from 'firebase-admin';
import faker from '@faker-js/faker';

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const db = admin.firestore();

const generateFakeData = async () => {
  for (let i = 0; i < 100; i++) { // Generate 100 records
    const fakeUser = {
      id: i,
      name: faker.name.findName(),
      image: `https://picsum.photos/200/300?random=${i}`, // Random image from Lorem Picsum
      bio: faker.lorem.sentence(),
    };

    await db.collection('People').doc(fakeUser.id.toString()).set(fakeUser);
  }
};

generateFakeData().then(() => {
  console.log('Fake data generated and uploaded!');
}).catch((error) => {
  console.error("Error generating fake data:", error);
});

