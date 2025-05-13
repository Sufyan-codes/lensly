import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 pb-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
        <div>
          <h4 className="font-semibold mb-2">Details</h4>
          <ul>
            <li>Instagram</li>
            <li>Newsletter</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Gallery</h4>
          <ul>
            <li>All</li>
            <li>Wild</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Studio</h4>
          <ul>
            <li>About</li>
            <li>Team</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Others</h4>
          <ul>
            <li>Contact</li>
            <li>Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
