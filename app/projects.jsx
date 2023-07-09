import CardBlue from './cardBlue'
import CardGreen from './cardGreen'

const projects = () => {
  return (
    <div className="px-12 lg:max-w-screen-md xl:max-w-screen-lg mx-auto space-y-24">
      <CardBlue name="WasteLess" desc="A platform for Indonesian people to buy and sell waste in order to help households and industry with waste management problems." img="./WasteLess.png" link="https://wasteless.my.id/" />

      <CardGreen name="Cube Craze" desc="A captivating puzzle game where players must strategically rotate and fit three-dimensional blocks to complete rows and clear the board." img="./Cube Craze.png" link="https://github.com/RafaUlinnuha/cube-craze" />

      <CardBlue name="Pamitran" desc="A website constructed for Pamitran, enabling seamless registration and comprehensive monitoring of their services." img="./Pamitran.png" link="https://pamitran-unpad.com/" />
    </div>
  )
}

export default projects