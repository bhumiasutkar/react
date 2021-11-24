//import Input from '../components/Input';
import Button from './eventProps/Button';
import { Greet, Person, PersonList } from './Greet';
import Heading from './heading';
import { Status, UnionValue } from './Status';
import TSInput from './eventProps/Input';
import StyleProp from './styleProp';
import LogIn, { User } from './state/LogIn';
import MyCount from './reducer';
import { Box } from './context/Box';
import { ThemeProvider } from './context/ThemeContext';
import { NewUser } from './context/NewUser';
import { UserProvider } from './context/UserContext';
import DomRef from './ref/DomRef';
import MutableRef from './ref/MutableRef';
import { CounterA } from './classComp/Counter';
import Private from './compProp/Private'
import Profile from './compProp/Profile';

const ReactTS = () => {
    const personName = {
        first: "BHumi", //key should be same while defining in type
        last: "asutkar"
    }

    const list = [
        {
            first: "BHumi",
            last: "asutkar"
        },
        {
            first: "DOlly",
            last: "asutkar"
        }
    ]
    return (
        <>
            <Greet name="Bhumi" isLoggedIn={false} />
            <Person name={personName} />
            <PersonList names={list} />
            <h4>passing component in type</h4>
            <Status>
                <Heading>Oscar goes to Bhumi!!</Heading>
            </Status>
            <UnionValue myStatus="loading" />
            <p>***********Events passing************</p>
            <Button handleClick={(e, id) => console.log('clicked', e, id)} />

            <TSInput value='' handleChange={(event) => console.log(event.target.value)} />

            <p>**********style prop*********</p>
            <StyleProp styles={{ background: '#C7ffcc', display: 'block' }} />

            <p>**********useState*********</p>
            <LogIn />
            <User />
            <p>********** reducer *********</p>
            <MyCount />
            <p>********** context *********</p>

            <ThemeProvider>
                <Box />
            </ThemeProvider>

            <UserProvider>
                <NewUser />
            </UserProvider>
            <p>********** useref *********</p>
            <DomRef />
            <MutableRef />
            <p>Class</p>

            <CounterA message='The count value is ' />
            <Private isLoggin={true} component={Profile} />
        </>
    );
}

export default ReactTS;