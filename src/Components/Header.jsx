
import Link from './Link';
import Logo from './Logo';
import Menu from './Menu';
import Avatar from './Ui/Avatar';
import Search from './Ui/Search';
import Button from './Ui/Button';
import { LuUpload } from "react-icons/lu";
const Header = () => {
    return (
      <main className='border-b border-gray-200'>
    <header className='w-7xl mx-auto px-8 py-4 flex items-center justify-between'>
      
      <section className='flex gap-10'>
         <Logo/>
         <Menu/>
      </section>

      <section className='flex gap-4 items-center '>
        <Link text="Apply Now" link="#"/>
       <Search/>
       <Avatar/>
       <Button text="Upload" icon={<LuUpload />}/>
      </section>
    </header>
    </main>
    );
};

export default Header;