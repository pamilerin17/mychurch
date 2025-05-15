import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Item1 from '../../assets/item1.png';
import Item2 from '../../assets/item2.png';
import Item3 from '../../assets/item3.png';
import Item4 from '../../assets/item4.png';


type TeamMemberProps = {
  name: string;
  image: string;
  socialLinks: {
    platform: 'twitter' | 'facebook' | 'linkedin';
    url: string;
  }[];
};

// Team member card component
const TeamMember: React.FC<TeamMemberProps> = ({ name, image, socialLinks }) => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'twitter':
        return <FaTwitter />;
      case 'facebook':
        return <FaFacebook />;
      case 'linkedin':
        return <FaLinkedin />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
      <div className="w-24 h-24 mb-4 overflow-hidden rounded-full">
        <img
          src={image}
          alt={`Photo of ${name}`}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-base font-bold uppercase mb-4">{name}</h3>

      <div className="flex space-x-3">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-300 hover:text-orange-600 transition-colors"
            aria-label={`${name}'s ${link.platform} profile`}
          >
            {getIcon(link.platform)}
          </a>
        ))}
      </div>
    </div>
  );
};

// Main Meet component
const Meet: React.FC = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      name: 'Kim Bowen',
      image: Item1,
      socialLinks: [
        { platform: 'twitter', url: 'https://twitter.com' },
        { platform: 'facebook', url: 'https://facebook.com' },
        { platform: 'linkedin', url: 'https://linkedin.com' },
      ],
    },
    {
      name: 'Danielle Watkins',
      image: Item2,
      socialLinks: [
        { platform: 'twitter', url: 'https://twitter.com' },
        { platform: 'facebook', url: 'https://facebook.com' },
        { platform: 'linkedin', url: 'https://linkedin.com' },
      ],
    },
    {
      name: 'Naomi Craig',
      image: Item3,
      socialLinks: [
        { platform: 'twitter', url: 'https://twitter.com' },
        { platform: 'facebook', url: 'https://facebook.com' },
        { platform: 'linkedin', url: 'https://linkedin.com' },
      ],
    },
    {
      name: 'Santos Payne',
      image: Item4,
      socialLinks: [
        { platform: 'twitter', url: 'https://twitter.com' },
        { platform: 'facebook', url: 'https://facebook.com' },
        { platform: 'linkedin', url: 'https://linkedin.com' },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Church Members</p>
        <h2 className="text-3xl font-bold text-gray-900 uppercase mt-1">
          Meet Our Inspirational Team
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Meet;
