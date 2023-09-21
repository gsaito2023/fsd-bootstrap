import avatar from "../jane-doe-avatar.png";

const Avatar = () => {
  return (
    <>
      <table id="clear-table">
        <tr>
          <td id="clear-border-lines" className="empty-cell-width"></td>
          <td id="clear-border-lines" className="empty-cell-width"></td>
          <td id="clear-border-lines" className="empty-cell-width"></td>
          <td id="image-cell">
            <img src={avatar}></img>
            <br />
            <span id="image-caption">Jane Doe</span>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Avatar;
