<p align="center">
    <img src="42-forest.png" height="300">
    <br>
    <h1 align="center">
    Urban Gardening
    </h1>
</p>
<p align="center">
        Software Repository for the Urban Gardening Project at
    <a href="https://www.42heilbronn.de/en/">42 Heilbronn</a>
</p>

## ≡ Table of Contents
- [What is this project about?](#what-is-this-project-about)
- [Stages](#stages)
- [Progress](#progress)
- [What is hydroponics?](#what-is-hydroponics)
- [Contributors](#contributors)

## What is this project about?
This project focuses on the development of a hydroponic system managed by a Raspberry Pi. The system integrates various sensors to monitor conditions such as moisture, nutrient levels, and light. In response to the data from these sensors, actors, mainly pumps, are activated to maintain the desired environment for the plants. The Raspberry Pi also serves a dual purpose by hosting a website. This website presents users with the current system status, including measurement data and a live camera feed. Additionally, it provides controls for manual adjustments to the system when needed.

## Stages
- **Stage 1:** Get the Website up and running.
- **Stage 2:** Order the Sensors and tweak the controller.  
- **Stage 3:** Buy and bulid the hardware for the system.  
- **Stage 4:** Grow Stuff!  

## Progress
We have currently finished **Stage 2** by collecting all the sensors and elecronic devices and are now building the test stand for **Stage 3**. For **Stage 1** we implemented the following technologies:

1. **Frontend**: <a href="https://skillicons.dev">
        <img src="https://skillicons.dev/icons?i=vue,tailwind,typescript" /></a>
2. **Backend**: <a href="https://skillicons.dev">
        <img src="https://skillicons.dev/icons?i=go" /></a>
3. **Webserver**: <a href="https://skillicons.dev">
        <img src="https://skillicons.dev/icons?i=nginx" /></a>
4. **Controller**: <a href="https://skillicons.dev">
        <img src="https://skillicons.dev/icons?i=python" /></a>

The nginx server and the Go backend (using Gin) are implemented as a systemd service to be constantly run in the background. Currently, we have no real sensors that are producing data to be written into the InfluxDB database. Therefore, we wrote a Python script, which is adding random values (-0.5 - 0.5) to a simulated pH-sensor, which will be controlled by our PID controller.

<p align="center">
    <img src="schematic.png" width="70%">
<p>

For the **Stage 3** we are using the following wiring diagram:
![UrbanGardeningWiring](https://github.com/PetruCazac/UrbanGardening/assets/79046351/d449111a-d87c-450d-b538-2c6c7b6e3cad)


## What is hydroponics?
Hydroponics is a subset of hydroculture, which is a method of growing plants without the use of soil. Instead, plants are grown in an inert and sterile growing medium and nourished with a nutrient-rich water solution. This method allows plants to receive minerals and vitamins directly from the water, leading to faster growth and higher yields. Here are some key points about hydroponics:

1. **Efficiency**: Hydroponic systems often use less water than traditional soil-based farming, as the water in the system can be recirculated.

2. **Space-Saving**: Hydroponic systems can be stacked vertically, making it possible to grow more plants in a smaller area, ideal for urban farming.

3. **Controlled Environment**: Growers have precise control over nutrient levels, pH, and light exposure, ensuring optimal growth conditions.

4. **Fewer Pests and Diseases**: The absence of soil can reduce the occurrence of soil-borne diseases and pests.

5. **Types of Systems**: There are various hydroponic systems, including Nutrient Film Technique (NFT), Deep Water Culture (DWC), Wick System, and Aeroponics, each with its own advantages.

6. **Growing Medium**: While soil isn't used, plants still need a support structure. Common mediums include coconut coir, perlite, vermiculite, and rock wool.

7. **Sustainability**: Hydroponics can be a sustainable method of agriculture, especially when combined with aquaculture in systems known as aquaponics.

In essence, hydroponics offers a modern, scalable, and efficient way to produce food, making it especially valuable in regions with poor soil quality or limited water resources.

## Contributors
[Petru](https://github.com/PetruCazac)

[Florian](https://github.com/flolau2k)

[Markus](https://github.com/kurz-m)

[Laurin](https://github.com/LaurinUB)

[Conrad](https://github.com/RealConrad)

[Harsh](https://github.com/harshkumbhani)
