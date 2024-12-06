import MineTest from './component/MineTest'
import ArrayObject from './component/ArrayObject'
import ComponentShare from './component/ComponentShare'
import ComponentRandom from './component/ComponentRandom'
import ComponentLocal from './component/ComponentLocal'
import TodoComponent from './component/TodoComponent'
import PortalComponent from './component/PortalComponent'
import ComponentSwitcher from './component/ComponentSwitcher'
import EffectComponent_1 from './component/EffectComponent_1'
import Eff from './component/Eff'
import Theme from './component/Theme'
import Effect_DataComponent from './component/Effect_DataComponent'
import UserProfile from './component/UserProfile'
import { UserProvider } from './component/UserContext'
import UpdateUser from './component/UpdateUser'
import Reducer_Count from './component/Reducer_Count'
import Reducer_Todo_c from './component/Reducer_Todo_c'
import Ref_Input from './component/Ref_Input'
import Ref_Timer from './component/Ref_Timer'
import CustomHook_Test from './component/CustomHook_Test'
import Project_Todo from './component/Project_Todo'
import Project_axios from './component/Project_axios'
import Project_Calculator from './component/Project_Calculator'
import Project_Toggle from './component/Project_Toggle'
import Project_HiddenSearch from './component/Project_HiddenSearch'
import Project_Testimonial from './component/Project_Testimonial'
import {accordionData} from './utils/content'
import Project_Accordian from './component/Project_Accordian'
import Project_FormValidation from './component/Project_FormValidation'
import TypeScript_1 from './component/TypeScript/TypeScript_1';
import TypeScript_Button_Test from './component/TypeScript/TypeScript_Button_Test';
import Main from './component/TypeScript/Reuseable_Prop_Type/Main';
import UseState_UserProfile from './component/TypeScript/UseState_UserProfile';
import UseState_ToDo_Array from './component/TypeScript/UseState_ToDo_Array';
import UseRef_Form from './component/TypeScript/UseRef_Form';
import UseRef_FocusInput from './component/TypeScript/UseRef_FocusInput';
import MyProvider from './component/TypeScript/UseContext_typescript/MyContext';
import Counter from './component/TypeScript/UseContext_typescript/Counter';
import Reducer_counter from './component/TypeScript/Reducer_Typescript/Reducer_counter';
import UseEffect_TypeScript from './component/TypeScript/UseEffect_TypeScript';
import React_Hook_Form from './component/TypeScript/React_Hook_Form/React_Hook_Form';

const App = () => {
  return (
    <>

<MineTest/>
<ArrayObject/>
<ComponentShare/>
<ComponentRandom/>
<ComponentLocal/>
<TodoComponent/>
<PortalComponent/>
<ComponentSwitcher/>
<EffectComponent_1/>
<Eff/>
<Theme/>
<Effect_DataComponent/>
<UserProvider>
  <UserProfile/>
  <UpdateUser/>
</UserProvider>
<Reducer_Count/>
<Reducer_Todo_c/>
<Ref_Input/>
<Ref_Timer/>
<CustomHook_Test/>
<Project_Todo/>
<Project_axios/>
<Project_Calculator/>
<Project_Toggle/>
<Project_HiddenSearch/>
<Project_Testimonial/>
<Project_FormValidation/>
<TypeScript_1 name="Test" age="22" isStudent={true} />
{/* <TypeScript_1>
  <p>getting children in typescript</p>
</TypeScript_1> */}

<TypeScript_Button_Test label="click" onclick={()=>console.log("clicked")} Disabled={true} />
<Main/>
<UseState_UserProfile/>

<UseState_ToDo_Array/>
<UseRef_Form/>

<UseRef_FocusInput/>

<MyProvider>
  <Counter/>
</MyProvider>
<Reducer_counter/>
<UseEffect_TypeScript/>
<React_Hook_Form/>

<div className="AccordianData">
{accordionData.map(({title,content})=>(
  <Project_Accordian title={title} content={content} key={Math.random()}/>
))}
</div>



    </>
  )
}

export default App