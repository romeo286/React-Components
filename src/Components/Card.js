import React from 'react'


//Nested to Home Component.............................................................................




function Card() {
    return (
        <main role="main">

        <section class="jumbotron text-center">
          <div class="container">
            <h1 class="jumbotron-heading">Album example</h1>
            <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
            <p>
              <a href="#" class="btn btn-primary my-2">Main call to action</a>
              <a href="#" class="btn btn-secondary my-2">Secondary action</a>
            </p>
          </div>
        </section>
      
        <div class="album py-5 bg-light">
        <div class="card-columns">
        <div class="card">
          <img src="https://www.portraitprofessional.com/img/page-images/homepage/v18/slider/faster-and-easier-A.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title that wraps to a new line</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
        <div class="card p-3">
          <blockquote class="blockquote mb-0 card-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div class="card">
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhAVFRUVFRUVFRUVFRUVFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIARMAtwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAQIDBAUGBwj/xABAEAACAQICBgcGBAQEBwAAAAAAAQIDEQQhBQYSMUFRNGFxgYKRsxMiMrHB8AehsuEkQlLRFCMz8RVTYnKSosL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+S2GkNIdgFYLErBYCNh2JWCwEbBYlYpnW5dl8kBY5Jb3Yh7ePDP5eZa8NBqN2vi993z2dyt3/MpnWUlspJbU232P4Uuqyiu9gRnVkldpJeb8jPPFT37Nu1M6EVHZkpJbUNp2/qeVu7f3d5TTxcW9iavFL3eppZfldd4GVY18Y+RfRxMZdXabISw62G4tqad1f4X8KXnn5FcY0XGcY5X2HF8U90+xbvzAQrBTw8oOUZLd5We4nYCFhFliNgItCsTsKwELCsTsKwHR1aX8VS7Z+nMCWrS/iqXbP05gBgGkOxKwEbDsSCwCsFh2BoDLi69slv8AkjHTqK9r2XFu4sa7zfb9/QriwN+KwuSlBuSa4Xdu+xhR28IpKk1z+9/31HY0XqTUq01JzUb5pAeP9q8k96y7VyZCUD6no/8ADCM172Ia7Ir6m2f4UU1urPyA+PNZdhFStfr+p9F0v+HE6ecKikeK0xoqpQkozVuQGdYiUms7u/38zqWOdgIe9flf7+Z0gI2E0TFYCFhWJ2EBEVibFYDfq30ql2z9OYx6tr+Jpds/TmAGEYWGkArEgsOwCEydiNRZPsYHAlK7vzzHT3kbjiwO/oaG1LN3s0+5n1fQz9yKasfJtXoylUjGO+933H1XANQjHafID2Oi6dlmdScE0eVpaz4OPxYmF1wTv8jt4bTmHqL3akX3rLtXADJpLDXR81170dtw3Zrc/kz63U2ZNWaad3lySueP10w0fZvs+YHwzAUnt58PPirHUsZqdC1aeW7Pz5GxgV2FYm0KwERWJiAhYLErBYDfq4v4mn2z9OYiernSafbP05gBgsMaQwFYY7BYBCZOwWA5OjdFuvJxjUpwd7R9pLY25f0xdrX3b7bzLjMLOlN06kXGUXZp8/qfQ9UtBUKuGi6i2trGyhJLfGLgsu3K/ejHrJopOFTZTm8PJ0/aNO7jvinL+a2cb8dlgU/hrgnKc5tPKOXe7X++s9NpnAzqxfvbMFv7O85uoWKWzJPe2r9f3c+oaIwsXvSfdcD4jiMNQV2o12lfOKla6V1wt5vjuM+I0VWU/ZuNRSsnsvOVnmm0uHWj7xidVk2506sqbeb2Yxabe+6ayJ6P1eVK851J1HbfKySXVGKSA8T+H2j8XThVr1XJU4wklF73JrguCR4LSWn8TiH71ayat8TSdt+S3715n6ApZ7UeEkfJtK6qyp+0jCnTai5xs1aSjwV+K2Wu5geHwcZXk5O+5Jp35s0tDp4d07was03fvsNgQE0TsRYEbCsTFYCIiVhWA36udJp9s/TkBLV1fxNPx+nIAMKQ0OwJAA0Fh2AAHYYHV1N0nsYmWH2kvaSp1aak7R9rBOLi3/LtRbV+aR7DWXH0nh3sxUdqmqcoOS9ptwd4y2bWcWnO7vvS5nyLTKcZwmnbLJrenF3v+aPT4HW6t/hpYWpSjNSjb217SVntRurZ5pAZNBOpTjezVn1Ztb/ofUNWdOXSuzwWi6alF9ay8zZgpyozz3X/ANwPseExakizSOI2aU3uSi231Leec1fx8ZpZndq6QjbZSu3fL77gPJVNfaFKuoU6NarbOUo05OFk85J2zS5oz4nWOjisTWlRvsRhTTdsnP39pLsWz5onrBCk6bw8cVSopyW1CMrKMc3L4fdg92Tavc8JSprCRrwhOM4N3jOD2oyyte/MDn6Sq7VWbXO3kZgiue/j2jAjYTROwmgIWETaEBERKwgN+rvSafj9OQx6vL+Jp+L05CAxJDSGgALDsAwBIAADnaZheMXyl81+xt0VBSg1zW/k+ZbDCe2caXGcowTte21JK9r5+aPav8NMXQSlRlCurLL/AE5vwzez5SYHjNB45wlsS3q67D2EFGos7O279+WZ5DWTQ9SlO7pzhLjCUXGWXFJ/EuwjojTritmbye5r5P8AMD32iJypvflv++ZDTtHGTi3DFwoUp5fBLb/8r5X7jl4LFxqZKpnv58t249JhtH1KsPZuV4tWWd93Vu5AcDQWqMW5UqmMcpVISVHY2oqNZRbi5Jt7SyfLd15eNrYCrRqShOqp7tqzd07u6ae55M9fpPQWM0fUpYmGKVSNOrCapv8A6X8Od8nmsuZp/FTRUY4mnjaOdHGU1VUuCqJRUlyV1KMut7YHiwAAEJkhMCImSEBGwiQgOhq90mn4v0SEPV7pNPxfokAGMAGADEMAEMQDwumY4WtTqun7Rxbko7WwtzSblZ8XfdwPqurn4y4KSUMRSq0crNpKtT842n/6nwvH1Nqo3y91Zcv3uQpsD9b0/wDBaRo3pyo4ik99tmpFPri/hl5M+W67/hTBXq4Rum824NuUJd796L68+w+VaK0tXw1RVsPWnSqL+eDs7f0yW6S6nddR9f1T/F+nWSo6ShGnJ5KvBP2bv/zIb6fDNXW/4UB8fm62FqbM4uEk93B2fB/2PRYDXqpC2buuWS70fQNfdWYVo7cdmSktqMo2aaeaaa3rrPi+k9FzpSeV7Aen0nrjPER2Um+y7ty7jVh9MueAlhsRKTnCcZ4dXbjBN2lBJZbnUd3/AFWW48noRZSfNpeS/c6bAAEFwGJjEwEIYgATGIDoavdJp+L9EgDV7pFPxfokAGIYkMAGAABk0jitiNl8T3dS5mps8/ia23Jy8uxbvvrArRNMiiaAdxP75ElFkXEDu6u634nBpwg1Ok99Kd3FN73C2cH2ZdTOv/xzC4p2qL2En/VnBv8A71u70jxDVx0qjjk93Hde3NX4genxOAjRb2GnGUnZppptKN7W4e8uJUdLTlelL2KotOmqSlFrL4nsuLXBrYS7jmAAAAAACABDEAgBiYHR1e6TT8X6JCDV3pNPxenIAMaGIYAAXADFpWtswtxll3cfvrOMa9LVL1Lf0q3e839DNCIEoQuaIRFTjYncBpEKhZcrkBRJECyZVJga8Fidh2e5vPq6zsJnnt50NGYr+R+F/wDyB0WACAYAJgAmAAITGIDo6u9Jp+L9EhBq90mn4vTkAGQAEAwuIrrztGT5J/IDhVp7UpPm2/7EqbKkSUnwA03txJKS5lEYc8zRCHF+QElEjKxMrqsCmoymRZMrkAU2Sllmv9nzFSSLGB18JX24p8dz7S442BrbE+p5P6PuOyACAAAQAAgBiA6Or3Safi9OQC1e6TT8XpyADIAgADPj3/ly7C8zaR/05d3zQHGRbcomCzYGmFW7y8y/bXaZItvKJqpQS3gSVyuoWXKqgFLK5FjKpAODLEV0iaAUzsYGttQXNZP6M5Bfo+rsztwll38PvrA69wEABcLiAAEwEB0dXek0/F6cgDV3pNPxenIAMggEAGfH/BLs+pfcrrxvFrmmgODYkokGyaYF9IuSM8C9MBpFdR8iUncjYCDjZFEjRVM8gHTJpEIFyYEGiEkWsjIDs0am1FPmvz4kzFoyfutcn+Tz/uawGAguAAAgOjq70mn4/TkAaudJp+P05ABjFcVwAYhXADhYmNpyXW/7kUXaQX+Y+u39voU2Auiy5GeLLkwHKQormJIs2QKqpmkaaxmYE6aLLlUZMHICbkJshclcDVo2XvNc18n+50TlYKVprruvyOoAwEADEAAdHV3pNPxenIYtXek0/H6chgYLiuAmA7gyNwuBzdKL3k+r5P8AczXNuko5J8n8zDFATiWplSLYICdiaGoldapYCqszOyaV8yL3gSjTZJ0iyEx+0AocBMvuRmBXGVmnydzspnFZ1cJK8F1ZeQFwxAAAAAdLVzpNPx+nIBaudJp+P05jAwMixsiwAGArgUYuN4Psv5ZnMTOyzjyVnblkA0XUimLJynYC2rXtkjM82BbRhfMBNZFK3ltVlKeYFqAlCVwnFgVuRBzLfZiaAqudTAv3X2/T9jnSibNGy3rs+oG4BXACQCADpaudJp+P05AGrnSafj9OQAYGRYCYCABADOZi42m+vP78jpmLH2vF9uXkBm3K5FXYJNs0U423gRp0W95ZWqqOSIVMQ3lFDjRUVeW8ChJvPgQsW1qlyNNACgSW0i7ZZCUgIe05oNoLBsgK5ZgpWn23X1+hU2Oi7SXagOshkSQDAEAHS1c6TT8fpyEGrnSafj9OYAc4TGyLABAAAZcdb3W+v6Goz42F49mYGT29tyI7Se+VkKOxxTTLYUIPiARrxWSXeRmk83KXkTk4x3JEON27v8kBX2K3WxJ2ZZK/FihC7AthUuDsDgkJgRciLY2iLATExsQHXi7q/PMkUYSV4Ly8i9ANAAwOjq50mn4/TmAaudJp+P05gBzWIAAiMAAQwADHvjdlFTJZAAFDZZSimxABOoiMGAAXyIAAFSeZK2dgABTWZFSdn12v+bGAG3AfC+36I1oAAY0IAOnq50mn4vTkAAB//9k=" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card bg-primary text-white text-center p-3">
          <blockquote class="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
            <footer class="blockquote-footer text-white">
              <small>
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has a regular title and short paragraphy of text below it.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img src="https://i.pinimg.com/originals/7b/88/8e/7b888e265016841358789b8b7bb64001.jpg" class="card-img-top" alt="..." />
        </div>
        <div class="card p-3 text-right">
          <blockquote class="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
        </div>
      
      </main>
    )
}

export default Card
