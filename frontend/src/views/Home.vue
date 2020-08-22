<template>
  <div class="home">
    <div class="container">
      <h1>Selecione um nome de usuário</h1>
      <div class="input-group">
        <input type="text" name="username" maxlength="26" />
        <button type="submit">Continuar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.home {
  --input-group-border-color: rgb(189, 189, 189);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  overflow: hidden;

  background-image: url('../assets/talk.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

h1 {
  font-weight: normal;
}

.container {
  height: 400px;
  width: 350px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgb(150, 150, 150);
  transition: box-shadow 800ms ease-out;

  background-color: white;
}

.container:hover {
  box-shadow: 1px 1px 5px rgb(150, 150, 150);
}

input,
button {
  height: 36px;
  border: none;
  border-radius: 3px;
  padding: 3px 5px;
}

.input-group {
  display: flex;
}

.input-group input {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  flex: 1 1 auto;
  border: 1px solid var(--input-group-border-color);
  border-right: none;
}

.input-group button {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border: 1px solid var(--input-group-border-color);
}

.input-group button:hover {
  cursor: pointer;
}
</style>
