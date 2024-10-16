### Introduction
<div style="text-align:justify">

It is well-known that when an optical beam is incident normally from a medium with refractive index n<sub>1</sub> onto another medium with refractive index n<sub>2</sub>, part of the beam is reflected and part of it is transmitted. Note that the incident beam encounters a single interface only. The reflectivity R<sub>1</sub> and transmissivity T<sub>1</sub> in this case are given by:

<center><b>R<sub>1</sub>\=P<sub>r</sub>/P<sub>i</sub>\=(n<sub>1</sub>\-n<sub>2</sub>/n<sub>1</sub>+n<sub>2</sub>)2       ----(1)</b></center>

<center><b>T<sub>1</sub>\=P<sub>t</sub>/P<sub>i</sub>\=1-R<sub>1</sub>\=4n<sub>1</sub>n<sub>2</sub>/(n<sub>1</sub>+n<sub>2</sub>)2       ----(2)</b></center>

Where P<sub>i</sub> , P<sub>r</sub> and P<sub>t</sub> denote the incident, reflected and transmitted powers, respectively. The subscripts in R<sub>1</sub> and T<sub>1</sub> denote reflection and transmission through a single interface.

The situation becomes more involved when light passes through a slab of material with a non-zero thickness d , as shown in Figure below this paragraph. The refractive index of the slab is assumed to be 2 n and the refractive index of the surrounding material is assumed to be 1 n . This type of problem is different from the single interface problem shown in Figure1, because in this particular case, the light beam encounters two parallel interfaces, leading to multiple reflections inside the slab.

<center>

![](images/figure.PNG)

**Figure 1:Light Transmission and Reflection through a Slab with Two Parallel Interfaces**

</center>


According to theory, the transmissivity T<sub>2</sub> of the slab shown in Figure above is given by:

<center><b>T<sub>2</sub>\=P<sub>t</sub>/P<sub>i</sub>\=(1-R)<sup>2</sup>/(1-R)<sup>2</sup>+4R<sub>1</sub>sin<sup>2</sup>δ       ----(3)</b></center>

Where R<sub>1</sub> is the reflectivity of a single interface, which is given by equation (1), δ= k<sub>o</sub>n<sub>2</sub>d = (2π/λ)n<sub>2</sub>d and λ is the free space wavelength. The subscript in T<sub>2</sub> indicates the presence of two parallel interfaces.

According to equation (3), when the parameter δ is a multiple of π (i.e. δ=k<sub>o</sub>n<sub>2</sub>d=0,π,2π,3π, ...) the transmissivity reaches a maximum value of 1. However, when δ is an odd multiple of   π/<sub>2</sub> (i.e. δ=k<sub>o</sub>n<sub>2</sub>d=0,π/2;,,3π/2,5π/2 ...) the transmissivity reaches a minimum value of (1-R<sub>1</sub>)<sup>2</sup>/(1+R<sub>1</sub>)<sup>2</sup> . Thus the transmissivity T<sub>2</sub> of the slab always lies in the range:

<center><b>(1-R<sub>1</sub>)<sup>2</sup>/(1+R<sub>1</sub>)<sup>2</sup> <= T<sub>2</sub> <= 1       ----(4)</b></center>

Let us assume that the slab is made of glass (n<sub>2</sub> =1.50 ) and the surrounding medium is air (n<sub>1</sub> =1.00 ). Using equation (1) results in R<sub>1</sub> = 0.04. Then using equation (4), it is easy to show that T<sub>2</sub> lies in the range:

<center><b>0.852 <= T<sub>2</sub> <= 1.0       ----(5)</b></center>

Using equation (5), we can calculate range of the power loss in dB that an optical beam encounters when passing through a slab of glass:

<center><b>\-10log(0.852) >= dB<sub>Loss</sub> >= -10log(1.0)  </b></center>
<center><b>0.696 dB >= dB<sub>Loss</sub> >= 0dB       ----(6)  </b></center>

In this experiment, the power loss due to a glass slab in the form of a microscope slide will be measured in dB. Because the thickness _d_ of the microscope slide is _not uniform_ across the slide, the parameter δ changes value depending on the location where the light beam passes through the slide. This means that the power loss caused by the glass slide is also not uniform. However, according to theory this loss must always lie in the range given by equation (6). Also according to equation (6), the _mean_ loss of the glass slide equals (0+0.696) / 2 = 0.348 dB.

The gain an insight into how the slide thickness effect the transmissivity, let us note that a π/2 change in the parameter δ can cause the transmissivity to change from maximum to minimum or vice versa. For Δδ = π/2 = k<sub>o</sub>n<sub>2</sub>Δd , we have Δd = (π/2)/(k<sub>o</sub>n<sub>2</sub> = λ/(4n2) = 0.6328/(4\*1.5) approx. 0.11µm. Thus a very small change in _d_ can lead to large changes in the transmitted power.

The objective of this experiment is to find out if the meter setting has an effect on the optical loss measurements.


<center>

![](images/b.png)

**Figure 2: Set up for Optical Power Measurements**

</center>

</div>
