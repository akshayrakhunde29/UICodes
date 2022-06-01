import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import {LoginComponents} from './components/login.components';
import RegisterComponent from './components/register.components';
import PrimativeDataBindingComponent from './components/primitiveDataBinding.component';
import ArrayDataBindingComponent from './components/arrayDataBinding.component';
import ArrayOfJsonBindingComponent from './components/arrayOfJsonBinding.component';
import NestedItrectionComponent from './components/NestedItrection.component';
import OneWayBindingComponent from './components/oneWayBinding.component';
import StateClassComponent from './components/stateClass.component';
import DataBindingFunctionComponent from './components/dataBindingFunction';
import DyanamicStyleComponent from './components/dynamicStyleChange.component';
import PropertiesCompoment from './components/property.component';
import NetflixIndexComponent from './components/Netflix/NetflixIndex.component';
import InstagramIndexComponent from './components/Instagram/InstagramIndex.component';
import FunctionEventComponent from './components/functionClassEvent/functionEvent.component';
import EvemtClassComponent from './components/functionClassEvent/classEvent.component';
import EvemtBindingClassComponent from './components/functionClassEvent/eventBindingClass.component';
import KeyEventComponent from './components/keyboardEvent/keyEvent.component';
import LifeCycleClassComponent from './components/lifyCycleComponent/classLIfeCycle.component';
import PotfolioWebsite from './components/potfolioWebsite/index.component';
import LoginComponent from './components/cookiesComponent/login.component';
import FormComponent from './components/form.component';
import YupFromComponent from './components/formComponent/yupForm.component';
import Apps from './components/crudOperation/Apps';
import AddForm from './components/simpleCrudOperationClass/components/AddForm';

ReactDOM.render(
  <React.StrictMode>
      <AddForm /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
