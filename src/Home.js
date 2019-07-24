import React from 'react';
import tykeImage from '../src/assests/tykeImage.jpg'
export const Home=()=> {
   return(
       <div style={{ backgroundImage: `url(${tykeImage})`}}>
        <h2> Welcome</h2>
        <p>
        Donec adipiscing tristique risus nec feugiat in fermentum posuere urna.
        Pellentesque sit amet porttitor eget.
        Fames ac turpis egestas integer eget aliquet nibh.
        Lobortis mattis aliquam faucibus purus in massa tempor. </p>
        Dictumst vestibulum rhoncus est pellentesque elit ullamcorper.
        Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat.
        <p>Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.
        Bibendum neque egestas congue quisque egestas. Egestas congue quisque egestas diam in arcu.
        At tempor commodo ullamcorper a lacus vestibulum sed. Sed viverra tellus in hac habitasse.
        Integer eget aliquet nibh praesent tristique magna. Vivamus arcu felis bibendum ut tristique.
        Aliquam sem fringilla ut morbi tincidunt augue.
        </p>
       </div>
   );
}