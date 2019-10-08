<template>
  <div>
    <Header/>
    <About/>
    <Relationships/>
    <Requrements/>
    <Users/>
    <Register/>
    <Footer/> 
  </div>
</template>

<script>
import Header from '@/components/Header'
import About from '@/components/About'
import Relationships from '@/components/Relationships'
import Requrements from '@/components/Requrements'
import Users from '@/components/Users'
import Register from '@/components/Register'
import Footer from '@/components/Footer'

export default {
  name: 'home',
  components: {
    Header,
    About,
    Relationships,
    Requrements,
    Users,
    Register,
    Footer
  }
}
</script>
