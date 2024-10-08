import onClose from "./modal-test";

export default function Modal({ id, header, body, footer,onClose }) {
  return (
    <div onInvalid={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is out model body.</p>
            </div>
          )}
        </div>
        <div className="footer">
          {footer ? footer : <h2> This si out footer.</h2>}
        </div>
      </div>
    </div>
  );
}
