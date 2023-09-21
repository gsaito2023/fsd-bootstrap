const ContactMe = () => {
  return (
    <>
      <span id="contactme" class="target"></span>

      <form method="post">
        <h2>CONTACT ME</h2>
        <div class="label-padding">
          <label for="name"> Name: </label>
          <br />
        </div>
        <input type="text" name="name" id="text-width" required />
        <br />
        <div class="label-padding">
          <label for="message"> Message: </label>
          <br />
        </div>
        <textarea
          id="message"
          name="message"
          rows="8"
          cols="52"
          required
        ></textarea>
        <br />
        <input type="submit" value="Submit" />
        <input type="reset" value="Clear" />
      </form>
    </>
  );
};

export default ContactMe;
