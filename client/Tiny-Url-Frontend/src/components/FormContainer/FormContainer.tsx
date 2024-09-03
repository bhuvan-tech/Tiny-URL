import * as React from 'react';
import axios from 'axios';
import { serverUrl } from '../../helpers/Constants';

interface IFormContainerProps {
  updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  const [fullUrl, setFullUrl] = React.useState<string>('');
  const { updateReloadState } = props;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${serverUrl}/shorturl`, {
        fullUrl: fullUrl,
      });
      setFullUrl('');
      updateReloadState();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="conatiner mx-auto p-2">
        <div className="bg-banner:banner my-8 rounded-xl bg-cover bg-center">
          <div className="w-full h-full rounded-xl p-20 backdrop-brightness-50">
            <h2 className="text-white text-4xl text-center pb-4">Tiny URL</h2>
            <p className="text-white text-xl text-center font-extralight">
              Paste your untidy link to Tiny URL
            </p>
            <p className="text-white text-center pb-4 text-sm font-thin">
              Free tool to shorten a URL or reduce link, Use our Tiny URL
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none text-slate-800">
                    tinyurl.link /
                  </div>
                  <input
                    type="text"
                    placeholder="add your link"
                    className=" block w-full p-2 ps-32 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus-border-blue"
                    value={fullUrl}
                    onChange={(e): React.ChangeEvent<HTMLInputElement> =>
                      setFullUrl(e.target.value)
                    }
                  />
                  <button
                    type="submit"
                    className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border border-blue-700 focus:ring-4 focus:outlin-none focus:ring-blue"
                  >
                    Shorten URL
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormContainer;
