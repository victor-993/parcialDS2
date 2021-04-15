import Parcial from '../componentes/Parcial';
import { shallow } from 'enzyme'



describe('Pruebas sobre el componente parcial', () => {

  test('Traer boton suma', () => {
    const wrapper = shallow(<Parcial num1={23} num2={3} name={"victor Hernandez"} />)
    const btn1 = wrapper.find('button').at(0)
    console.log(btn1.html())
  })

  test('Traer boton resta', () => {
    const wrapper = shallow(<Parcial num1={23} num2={3} name={"victor Hernandez"} />)
    const btn1 = wrapper.find('button').at(1)
    console.log(btn1.html())
  })


  test('Simular click boton suma', () => {
    const wrapper = shallow(<Parcial num1={23} num2={3} name={"victor Hernandez"} />)
    const btn1 = wrapper.find('button').at(0).simulate('click')
    const mensaje = wrapper.find('h1').text().trim()
    expect(mensaje).toBe('Señor victor Hernandez la suma o resta es 26')

  })

  test('Simular click boton resta', () => {
    const wrapper = shallow(<Parcial num1={23} num2={3} name={"victor Hernandez"} />)
    const btn1 = wrapper.find('button').at(1).simulate('click')
    const mensaje = wrapper.find('h1').text().trim()
    expect(mensaje).toBe('Señor victor Hernandez la suma o resta es 20')

  })




})