class UserData{
    constructor(servename,profileImage,about,fullname,profession,dob,father_name,mother_name,user_location){
        this.servename=servename
        this.profileImage = profileImage;
        this.about=about;
        this.fullname=fullname;
        this.profession=profession;
        this.dob=dob;
        this.father_name=father_name;
        this.mother_name=mother_name;
        this.user_location=user_location;
    }
}


const rohit_sharma=new UserData(
    '/Rohit-Sharma',
    '/images/rohit-sharma.jpg',
    'Rohit Gurunath Sharma is an Indian international cricketer who currently plays for and captains the India national cricket team in Test and One Day International matches.',
    'Rohit Sharma',
    'Indian Cricketer',
    '30 April 1987',
    'Gurunath Sharma',
    'Purnima Sharma',
    'Mumbai'
)

const abhinav=new UserData(
    '/Abhinav',
    '/images/abhinav.jpg',
    'Abhinav Pandey Currently persuing BCA from Dev Sanskriti Vishwavidyalaya (DSVV) Haridwar.',
    'Abhinav Pandey',
    'Student',
    'unknown',
    'unknown',
    'unknown',
    'unknown'
)
const anshuman=new UserData(
    '/Anshuman',
    '/images/anshuman.jpg',
    'Anshuman Thakur Currently persuing BCA from Dev Sanskriti Vishwavidyalaya (DSVV) Haridwar. Expert Photographer, Photoeditor.',
    'Anshuman Thakur',
    'Student',
    '05 July 2003',
    'Prahalad Thakur',
    'Anjila Devi',
    'Darbhanga, Bihar'
)
const tarun=new UserData(
    '/Tarun',
    '/images/tarun.jpg',
    'Tarun Kumar Singh Currently persuing BCA from Dev Sanskriti Vishwavidyalaya (DSVV) Haridwar.',
    'Tarun Kumar',
    'Student',
    '22 February 2002',
    'Angad Prasad',
    'Prabhavati',
    'Balrampur, Uttar Pradesh'
)
const anupam=new UserData(
    '/Anupam',
    '/images/unknown.jpg',
    'unknown',
    'Anupam Raj',
    'Student',
    'unknown',
    'unknown',
    'unknown',
    'unknown'
)
const akhil=new UserData(
    '/Akhil',
    '/images/akhil.jpg',
    'Akhil Pratap Singh Currently persuing BCA from Dev Sanskriti Vishwavidyalaya (DSVV) Haridwar.',
    'Akhil Pratap Singh',
    'Student',
    '21 August 2005',
    'Abnish Kumar',
    'Kirti Singh',
    'Auraiya, Uttar Pradesh'
)
const sadgyan=new UserData(
    '/Sadgyan',
    '/images/unknown.jpg',
    'unknown',
    'Sadgyan Singh',
    'Student',
    'unknown',
    'unknown',
    'unknown',
    'unknown'
)
const aman=new UserData(
    '/Aman',
    '/images/aman.jpg',
    'Aman Gupta Currently persuing BCA from Dev Sanskriti Vishwavidyalaya (DSVV) Haridwar.',
    'Aman Gupta',
    'Student',
    '19 Jun 2002',
    'Prahalad Kumar Gupta',
    'Anita Devi',
    'Aurangabad, Bihar'
)
const suryakant=new UserData(
    '/Suryakant',
    '/images/suryakant.jpg',
    'Suryakant Sahu Currently persuing BCA from Dev Sanskriti Vishwavidyalaya (DSVV) Haridwar.',
    'Suryakant Sahu',
    'Student',
    '03 May 2005',
    'Shivnandan Sahu',
    'Babita Sahu',
    'Gariyaband, Chattisgarh'
)
const shivam=new UserData(
    '/Shivam',
    '/images/shivam.png',
    'unknown',
    'Shivam Sah',
    'Student',
    '21 August 2005',
    'unknown',
    'unknown',
    'unknown'
)
const omkar=new UserData(
    '/Omkar',
    '/images/unknown.jpg',
    'Omkar Kumar Currently persuing BCA from Dev Sanskriti Vishwavidyalaya (DSVV) Haridwar.',
    'Omkar Kumar',
    'Student',
    '12 May 2005',
    'Mukesh Singh',
    'Annu Devi',
    'Barbigha, Bihar'
)
const prakhar=new UserData(
    '/Prakhar',
    '/images/unknown.jpg',
    'unknown',
    'Prakhar Saxena',
    'Student',
    'unknown',
    'unknown',
    'unknown',
    'unknown'
)
const yashwant=new UserData(
    '/Yashwant',
    '/images/unknown.jpg',
    'Yashwant Giri Currently persuing BCA from Dev Sanskriti Vishwavidyalaya (DSVV) Haridwar.',
    'Yashwant Giri',
    'Student',
    '14 July 2004',
    'Jitendra Giri',
    'Sambhavati Devi',
    'Siddhardh Nagar, Uttar Pradesh'
)
const vibhavasu=new UserData(
    '/Vibhavasu',
    '/images/vibhavasu.jpg',
    'Vibhavasu Bhadauria Currently persuing BCA from Dev Sanskriti Vishwavidyalaya (DSVV) Haridwar.',
    'Vibhavasu Bhadauria',
    'Student',
    '13 April 2003',
    'Prabodh Kumar Bhadauria',
    'Seema Bhadauria',
    'Mainpuri, Uttar Pradesh'
)
const sarthak=new UserData(
    '/Sarthak',
    '/images/sarthak.jpg',
    'Sarthak Shukla Currently persuing BCA from Dev Sanskriti Vishwavidyalaya (DSVV) Haridwar.',
    'Sarthak Shukla',
    'Student',
    '03 June 2003',
    'Shivakant Shukla',
    'Kalpna Shukla',
    'Prayagraj, Uttar Pradesh'
)
const kamal=new UserData(
    '/Kamal',
    '/images/unknown.jpg',
    'unknown',
    'Kamal Singla',
    'Student',
    'unknown',
    'unknown',
    'unknown',
    'unknown'
)


export const StudentData=[abhinav,anshuman,tarun,anupam,akhil,sadgyan,aman,suryakant,shivam,omkar,prakhar,yashwant,vibhavasu,sarthak,kamal];